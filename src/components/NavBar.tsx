import { Layout, Menu } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { RouteNames } from '../router/routes'
import { selectIsAuth, selectUsername, setIsAuth } from '../store/redusers/Auth/authSlice'

const NavBar: FC = () => {
  const dispatch = useAppDispatch()
  const nav = useNavigate()
  const isAuth = useAppSelector(selectIsAuth)
  const username = useAppSelector(selectUsername)

  function logout() {
    dispatch(setIsAuth(false))
    nav(RouteNames.LOGIN)
  }

  const items = [{ key: 1, label: "Контакты", onClick: () => nav(RouteNames.CONTACTS) }]
  if (isAuth) {
    items.push({ key: 2, label: username + ' Выйти', onClick: logout })
  } else {
    items.push({ key: 2, label: "Логин", onClick: () => nav(RouteNames.LOGIN) })
  }

  return (
    <Layout.Header>
      <Menu
        theme="dark"
        mode="horizontal"
        selectable={false}
        items={items}
      />
    </Layout.Header>
  )
}

export default NavBar