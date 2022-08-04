import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../hooks/redux'
import { publicRoutes, privateRoutes } from '../router/routes'
import { selectIsAuth } from '../store/redusers/Auth/authSlice'

const AppRouter: FC = () => {
  const isAuth = useAppSelector(selectIsAuth)

  return (
    isAuth
      ? <Routes>
        {privateRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )}
      </Routes>
      : <Routes>
        {publicRoutes.map(route =>
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        )}
      </Routes>
  )
}

export default AppRouter
