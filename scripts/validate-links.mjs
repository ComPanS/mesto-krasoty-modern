import { readdir, readFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('../', import.meta.url))
const sourceRoot = join(projectRoot, 'src')
const failures = []

async function visit(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await visit(path)
    else if (['.js', '.jsx', '.ts', '.tsx'].includes(extname(entry.name))) inspect(path, await readFile(path, 'utf8'))
  }
}

function inspect(path, source) {
  for (const [pattern, message] of [[/(\"|')\/#[-\w]+\1/g, 'Use a same-document hash without a leading slash.'], [/\bhref\s*=\s*(?:\{\s*)?(\"|')#\1(?:\s*\})?/g, 'Inert href was found.']]) {
    for (const match of source.matchAll(pattern)) failures.push(`${relative(projectRoot, path)}:${source.slice(0, match.index).split('\n').length}: ${message}`)
  }
}

await visit(sourceRoot)
if (failures.length) { console.error(failures.join('\n')); process.exitCode = 1 }
else console.log('Internal link validation passed.')
