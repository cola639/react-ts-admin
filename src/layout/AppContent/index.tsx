import { FC } from 'react'
import { Layout } from 'antd'

const { Content } = Layout

const AppContent: FC = () => (
  <Layout style={{ padding: '0 24px 24px' }}>
    <Content
      style={{
        padding: 24,
        margin: 0,
        minHeight: 280
      }}
    >
      Content
    </Content>
  </Layout>
)

export default AppContent
