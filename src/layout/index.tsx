// Third Lib
import { FC } from 'react'

// UI Component
import { Layout } from 'antd'

// Own Component
import AppHeader from './AppHeader'
import AppSidebar from './AppSidebar'
import AppContent from './AppContent'

export interface IAppLayoutProps {}

const AppLayout: FC<IAppLayoutProps> = ({}) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSidebar />
      <Layout>
        <AppHeader />
        <AppContent />
      </Layout>
    </Layout>
  )
}

export default AppLayout
