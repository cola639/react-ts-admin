import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { Col, Row, Tabs } from 'antd'
import type { TabsProps } from 'antd'

import LoginForm from './LoginForm'
import Register from './Register'

import { useResponsive } from '../../hooks/useResponsive'

import styles from './index.module.scss'

import logo from '@assets/images/login/logo.svg'

export interface ILoginProps {}

const Login: FC<ILoginProps> = ({}) => {
  const { mobileOnly, tabletOnly, desktopOnly } = useResponsive()

  const onChange = (key: string) => {
    console.log(key)
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `LOGIN`,
      children: <LoginForm />
    },
    {
      key: '2',
      label: `NEW USER`,
      children: <Register />
    }
  ]

  return (
    <Row>
      {desktopOnly && (
        <Col className={`flex-column ${styles.login_left}`} span={desktopOnly ? 15 : 0}>
          <img src={logo} alt="logo" className={styles.login_img} />
          <div className={styles.login_text}>Material Cola</div>
        </Col>
      )}

      <Col className={`flex-center ${styles.login_right}`} span={mobileOnly || tabletOnly ? 24 : 9}>
        <Tabs className={`flex-space-around ${styles.login_tab}`} defaultActiveKey="1" items={items} onChange={onChange} />
      </Col>
    </Row>
  )
}

export default Login
