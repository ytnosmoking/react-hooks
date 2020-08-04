import React, { memo, FC, useContext, useMemo, useEffect, useState } from 'react'

import { StateContext, DispatchContext } from '../../tools'



const Child = memo((props: any) => {
  console.log('has updated Child')
  return <div>
    this is Child {props?.txt || Math.random()}
    <br />
    <span>{Math.random()}</span>
  </div>
})
const Child2 = (props: any) => {
  console.log(' this is no memo-------')
  return <div>
    this is another Child2222 {props?.txt || Math.random()}
    <br />

  </div>
}
const Child1 = (props: any) => {
  console.log(' this is updated child1-----')
  return <div>
    this is another Child11111 {props?.txt || Math.random()}
    <br />

  </div>
}

const Info: FC = (props: any) => {

  const state = useContext(StateContext)
  const dispatch = useContext(DispatchContext)
  const [text, setText] = useState('')
  const [value, setValue] = useState('')
  useEffect(() => {

    console.log(`Info`, state)
    if (!state.token) {
      props.history.push({ pathname: '/' })
    }
  }, [props.history, state])

  const Change = () => {
    // console.log(state)
    //@ts-ignore
    dispatch({ type: 'logout' })
  }
  const chilTxt = useMemo(() => {
    return <Child1 txt={text} />
  }, [text])

  return <div>
    {value}
    <div onClick={() => {
      setValue(value === 'YES' ? "NO" : "YES")
      // setText(Math.random() < 0.5 ? text : (Math.random() + ''))
    }}>change Father {text}</div>
    <br />
    <br />
    <Child txt={text} />
    <br />
    <br />
    <br />
    <Child2 />
    <br />
    <br />
    {chilTxt}
    <button style={{ height: 100, width: 200, backgroundColor: 'blue' }}

      onClick={Change}> this is will loginOut</button>
    <br />
    <br />
    ths is INfo
  </div>
}



export default Info