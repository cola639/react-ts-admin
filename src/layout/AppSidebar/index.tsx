// Third Lib
import React, { FC } from 'react'

// UI Component
import { Breadcrumb, Layout, Menu } from 'antd'
import { LaptopOutlined, NotificationOutlined, UserOutlined, GithubOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

// Own Component

// API

// Utils

// CSS
import styles from './index.module.scss'

// Assets

const { Sider } = Layout

export interface ISideBarProps {}

const menuItems: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`
      }
    })
  }
})

const SideBar: FC<ISideBarProps> = ({}) => {
  return (
    <Sider width={180} className="site-layout-background" collapsed={false}>
      <div className={styles.logo}>
        <a rel="noopener noreferrer" target="_blank">
          <GithubOutlined style={{ fontSize: '3.8rem', color: '#fff' }} />
        </a>
      </div>
      <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%', borderRight: 0 }} items={menuItems} />
    </Sider>
  )
}

export default SideBar
