import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { Button, Divider, Checkbox, Form, Input } from 'antd'

import Footer from './Footer'

import google from '@app/assets/images/login/google.svg'

import styles from './LoginForm.module.scss'

export interface ILoginFormProps {}

const LoginForm: FC<ILoginFormProps> = () => {
  const rules = {
    userName: [{ required: true, message: 'Please input your username!' }],
    password: [{ required: true, message: 'Please input your password!' }]
  }

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div className={`flex-column ${styles.wrap}`}>
      <h1 className={`${styles.title}`}>Good Morning, User</h1>

      <Button className={`flex-space-around ${styles.btn}`} size="large">
        <img className={styles.icon} src={google} alt="google" />
        <span> Sign in with Google</span>
      </Button>

      <Divider plain>Or</Divider>

      <Form className={styles.form} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item name="username" rules={rules.userName}>
          <Input placeholder="userName" />
        </Form.Item>

        <Form.Item name="password" rules={rules.password}>
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <div className="flex-space-between">
            <Button type="primary" htmlType="submit">
              Login
            </Button>

            <Button type="text" htmlType="button">
              Forget Password
            </Button>
          </div>
        </Form.Item>
      </Form>

      <Footer />
    </div>
  )
}

export default LoginForm
