import { Form, Input, Button } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../hooks/redux'
import { IUser } from '../models/IUser'
import { RouteNames } from '../router/routes'
import { setIsAuth, setUser } from '../store/redusers/Auth/authSlice'

const LoginForm: FC = () => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()

  function submit(values: IUser) {
    dispatch(setIsAuth(true))
    dispatch(setUser(values))
    nav(RouteNames.CONTACTS)
  }

  return (
    <Form
      onFinish={submit}
    >
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[{ required: true, message: 'Пожалуйста введите имя!' }]}
      >
        <Input autoComplete="off"/>
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
      >
        <Input.Password autoComplete="off"/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form >
  )
}

export default LoginForm