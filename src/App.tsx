import React, { useReducer } from 'react';
import { StateContext, DispatchContext } from './tools'

// import { Switch, Route, Redirect } from 'react-router-dom'
import DashBoard from "./Components/DashBoard";
// import Login from './Pages/Login'
// import Info from './Pages/Info'

import './App.css';
// const routes = [
//   {
//     path: '/login',
//     name: 'login',
//     component: Login
//   },
//   {
//     path: '/info',
//     name: 'info',
//     component: Info
//   }
// ]

function reduer(state: any = { token: localStorage.getItem('token') }, action: any = { type: '' }) {
  if (action.type === 'login') {
    return { ...state, token: '1234' }
  }
  if (action.type === 'logout') {
    return { ...state, token: '' }
  }
  return state
}


function App() {
  // 不用 redux mobx 版本  用钩子函数 reducer 处理
  const [state, dispatch] = useReducer(reduer, { token: localStorage.getItem("token") ? "1234" : "", })
  return (
    // @ts-ignore
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider
        // @ts-ignore
        value={{ ...state }}>
        <DashBoard />
        {/* <Switch>
          {routes.map((route: any, index: number) => (
            <Route key={index} path={route.path} component={route.component}></Route>
          ))}
          <Redirect from="/" to={state ? "/info" : '/login'}></Redirect>
        </Switch> */}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default App;
