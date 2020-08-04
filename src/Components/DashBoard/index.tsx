import React, { FC, useContext, useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from '../../Pages/Login'
import Info from '../../Pages/Info'
import { StateContext } from '../../tools'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/info',
    name: 'info',
    component: Info
  }
]


const DashBoard: FC = (props: any) => {
  const state = useContext(StateContext)
  useEffect(() => {
    console.log('DashBoard', state)
    console.log(state)
    localStorage.setItem('token', state.token ? '1234' : '')
  }, [state])
  return <div style={{ height: '100vh' }}>
    <div style={{ height: 200 }}>this is Header</div>
    <div style={{ height: 'calc(100% - 200px)' }}>
      <Switch>
        {routes.map((route: any, index: number) => (
          <Route key={index} path={route.path} component={route.component}></Route>
        ))}

        <Redirect from="/" to={state.token ? "/info" : '/login'}></Redirect>
      </Switch>
    </div>
  </div>
}

export default DashBoard