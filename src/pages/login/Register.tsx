import { FC, useState, useEffect, useCallback, useMemo } from 'react'
import { Button, Divider, Checkbox, Form, Input } from 'antd'

import Footer from './Footer'

import google from '@app/assets/images/login/google.svg'

import styles from './Register.module.scss'

export interface IRegisterProps {}

const Register: FC<IRegisterProps> = () => {
  const rules = {
    email: [{ type: 'email', message: 'Please input your email!' }],
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
      <h1 className={`${styles.title}`}>
        Welcome!
        <br />
        Create your account
      </h1>

      <Form className={styles.form} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
        <Form.Item name="email" rules={rules.email as any}>
          <Input placeholder="email address" />
        </Form.Item>

        <Form.Item name="username" rules={rules.userName}>
          <Input placeholder="userName" />
        </Form.Item>

        <Form.Item name="password" rules={rules.password}>
          <Input.Password placeholder="password" />
        </Form.Item>

        <Form.Item>
          <Button className={styles.create_btn} type="primary" htmlType="submit">
            Create your account
          </Button>
        </Form.Item>
      </Form>

      <Divider plain>Or</Divider>

      <Button className={`flex-space-around ${styles.btn}`} size="large">
        <img className={styles.icon} src={google} alt="google" />
        <span> Sign in with Google</span>
      </Button>

      <Footer />
    </div>
  )
}

export default Register
