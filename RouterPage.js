import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { DashboardPage } from '../pages/DashboardPage'
import { AboutUs } from '../pages/AboutUs'
import { Gallery } from '../pages/Gallery'

export const RouterPage = () => {
  return (
    //perumahan
    <BrowserRouter>
    {/*Blok perum A-C)*/}
    <Routes>
      {/*rumah A1-A5)*/}
      {/*default pas pertama kali masuk kavling*/}
      <Route path ='/' element={<LoginPage/>}/>
      {/*masuk ke dalam kavling*/}
      <Route path='dashboard' element={<DashboardPage/>}/>
      <Route path='aboutus' element={<AboutUs/>}/>
      <Route path='gallery' element={<Gallery/>}/>

    </Routes>
    </BrowserRouter>
   
  )
}