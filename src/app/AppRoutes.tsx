import { Route, Routes } from 'react-router-dom'
import { SiteLayout } from '../components/SiteLayout'
import { HomePage } from '../pages/HomePage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}
