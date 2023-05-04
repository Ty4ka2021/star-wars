import cn from 'classnames'
import React from 'react'
import s from './App.module.css'

const App = () => {
  return (
    <div className={cn(s.App, s.text)}>Hello</div>
  )
}

export default App