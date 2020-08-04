import React, { FC, useContext, useEffect } from 'react'


import { StateContext, DispatchContext } from '../../tools'





const Login: FC = (props: any) => {


  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  useEffect(() => {
    console.log(`Login`, state)

    if (state.token) {
      props.history.push({ pathname: '/' })
    }
  }, [props.history, state])


  const Change = () => {
    // console.log(state)
    // const type = state ? 'login' : 'logout'
    //@ts-ignore
    dispatch({ type: 'login' })
  }

  return <div>
    <button style={{ height: 100, width: 200, backgroundColor: 'red' }}

      onClick={Change}
    > this is login</button>


    <br />

    this is login</div>
}

export default Login