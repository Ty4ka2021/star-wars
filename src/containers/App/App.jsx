import PeoplePage from '@containers/PeoplePage/PeoplePage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../../components/Header/Header'
import HomePage from '../HomePage/HomePage'
import s from './App.module.css'



const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className={s.wrapper}>
          <Header />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/people' element={<PeoplePage />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App