import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Gerbang } from '../pages/Gerbang'
import { RumahA1 } from '../pages/Rumah1'
import { RumahA2 } from '../pages/Rumah2'

export const RouterList = () => {
  return (
    //perumahan
    <BrowserRouter>
    {/*Blok perum A-C)*/}
    <Routes>
      {/*rumah A1-A5)*/}
      {/*default pas pertama kali masuk kavling*/}
      <Route path ='/' element={<Gerbang/>}/>
      {/*masuk ke dalam kavling*/}
      <Route path='A1' element={<RumahA1/>}/>
      <Route path='A2' element={<RumahA2/>}/>
      <Route path='A3'/>
      <Route path='A4'/>
      <Route path='A5'/>
    </Routes>
    </BrowserRouter>
   
  )
}

//5 rumah nama paijo(1), tukimin(2), pardi(3), alex(4), bizer(5)
//pada setiap rumah siapkan tombol untuk menuju rumah lainnya
//didalam gerbang bisa menuju semua rumah
//rumah paijo ke (3,4,0)
//rumah tukimin (1,5,0)
//rumah pardi ke (4,5,0)
//rumah alex (4,5,0, tukimin)
//rumah bizer (0)
