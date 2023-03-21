import { FC } from 'react'
import { useThemeWatcher } from './hooks/useThemeWatcher'

// ui
import Login from './pages/login'
import Header from '@/layout/AppHeader'
import SiderBar from '@/layout/AppSidebar'
import AppLayout from '@/layout'

export interface IAppProps {}

const App: FC<IAppProps> = () => {
  useThemeWatcher()

  return <AppLayout />
}

export default App
