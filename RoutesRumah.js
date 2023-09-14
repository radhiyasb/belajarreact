import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Gerbang } from '../pages/Gerbang'
import { Rumah1 } from '../pages/Rumah1'
import { Rumah2 } from '../pages/Rumah2'
import {Rumah3} from '../pages/Rumah3'
import {Rumah4} from '../pages/Rumah4'
import {Rumah5} from '../pages/Rumah5'

export const RoutesRumah = () => {
  return (
    //perumahan
    <BrowserRouter>
    {/*Blok perum A-C)*/}
    <Routes>
      {/*rumah A1-A5)*/}
      {/*default pas pertama kali masuk kavling*/}
      <Route path ='/' element={<Gerbang/>}/>
      {/*masuk ke dalam kavling*/}
      <Route path='paijo' element={<Rumah1/>}/>
      <Route path='tukimin' element={<Rumah2/>}/>
      <Route path='pardi' element={<Rumah3/>}/>
      <Route path='alex' element={<Rumah4/>}/>
      <Route path='bizer' element={<Rumah5/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}
