import PeoplePage from '@containers/PeoplePage/PeoplePage'
import React from 'react'
import s from './App.module.css'



const App = () => {
  return (
    <div className={s.App}>
      <PeoplePage />
    </div>
  )
}

export default App