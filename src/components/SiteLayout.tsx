import { Outlet } from 'react-router-dom'
import { site } from '../content/site'

const navigation = [
  { to: '#about', label: 'О салоне' },
  { to: '#services', label: 'Услуги' },
  { to: '#reviews', label: 'Отзывы' },
  { to: '#contacts', label: 'Контакты' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Место красоты, в начало">{site.shortName}</a>
        <nav aria-label="Основная навигация">
          {navigation.map(({ to, label }) => <a key={to} href={to}>{label}</a>)}
        </nav>
        <a className="header-phone" href={`tel:${site.contact.phone.replace(/[^\d+]/g, '')}`}>{site.contact.phone}</a>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <p>{site.name} · Краснодар · Планерная, 13</p>
        <a href={site.contact.whatsapp}>Написать в WhatsApp ↗</a>
      </footer>
    </div>
  )
}
