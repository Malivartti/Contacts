import { Card, Layout, Row } from 'antd'
import React, { FC } from 'react'
import LoginForm from '../components/LoginForm'

const Login: FC = () => {
  return (
    <Layout>
      <Row className="content" justify="center" align="middle">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  )
}

export default Login