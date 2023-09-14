import React, { useEffect, useState } from 'react'

export const Page = () => {
    const [nama, setNama] = useState("Fauzan");
    const [umur, setUmur] = useState(21);
    const [kota, setKota] = useState("");
    const [jenisKelamin, setJenisKelamin] = useState("");

    //mounting terup //bakal dijalankan ketika nama berubah
    useEffect(() => {}) 

  return (
    <div>
        <h1>Nama : {nama}</h1>
        <input onChange={(e) => {setNama(e.target.value)}} placeholder='Ubah Nama'></input>

        <h1>Umur : {umur}</h1>
        <button onClick={() => {(setUmur(umur-1))}}>Kurang Umur</button>
        <button onClick={() => {(setUmur(umur+1))}}>Tambah Umur</button>

        <h1>Kota : {kota}</h1>
        <button onClick={() => {(setKota("Jakarta"))}}>Jakarta</button>
        <button onClick={() => {(setKota("Bandung"))}}>Bandung</button>
        <button onClick={() => {(setKota("Surabaya"))}}>Surabaya</button>

        <h1>Jenis Kelamin : {jenisKelamin}</h1>
        <input onChange={(e) => {setJenisKelamin(e.target.value)}} placeholder='Ubah Jenis Kelamin'></input>
    </div>
  )
}
