import ErrorMessage from '@components/ErrorMessage/ErrorMessage'
import Header from '@components/Header/Header'
import PeoplePage from '@containers/PeoplePage/PeoplePage'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavoritesPage from '../FavoritesPage/FavoritesPage'
import HomePage from '../HomePage/HomePage'
import NotFountPage from '../NotFountPage/NotFountPage'
import PersonPage from '../PersonPage/PersonPage'
import SearchPage from '../SearchPage/SearchPage'
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
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/people/:userId' element={<PersonPage />} />
            <Route path='/fail' element={<ErrorMessage />} />
            <Route path='/not-found' element={<NotFountPage />} />
            <Route path='/*' element={<NotFountPage />} />
          </Routes>

        </div>
      </BrowserRouter>
    </>
  )
}

export default App
