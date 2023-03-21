import { FC } from 'react'

// UI
import { Dropdown, Layout } from 'antd'
import { MenuFoldOutlined, MailOutlined, CarryOutOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'

// Own Component
import SearchBox from './Search'

// CSS
import styles from './index.module.scss'

import avatar from '@/assets/images/dashboard/avatar.gif'

const { Header } = Layout

interface IindexProps {}

const items: MenuProps['items'] = [
  {
    label: <a href="https://www.antgroup.com">1st menu item 1st menu item</a>,
    key: '0'
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item 2nd menu item</a>,
    key: '1'
  },
  {
    type: 'divider'
  },
  {
    label: '3rd menu item',
    key: '3'
  }
]

const index: FC<IindexProps> = () => {
  return (
    <div className={styles.wrap}>
      <Header className="flex-space-between">
        <div className={styles.header_left}>
          <MenuFoldOutlined className="icon-small" />
        </div>

        <div className={`flex-center ${styles.header_right}`}>
          <div className="mr15">
            <SearchBox />
          </div>

          <div className="mr15">
            <Dropdown menu={{ items }} trigger={['click']}>
              <CarryOutOutlined className="icon-small" />
            </Dropdown>
          </div>

          <div className="mr15">
            <Dropdown menu={{ items }} trigger={['click']}>
              <MailOutlined className="icon-small" />
            </Dropdown>
          </div>

          <div className="flex-center">
            <Dropdown menu={{ items }} trigger={['click']}>
              <img className={`${styles.user_avatar}`} src={avatar} />
            </Dropdown>
          </div>
        </div>
      </Header>
    </div>
  )
}

export default index
