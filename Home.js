import React, { useState } from 'react'

export const Home = () => {
    const [nama, setNama] = useState("");
    const [gender, setGender] = useState("");

    const changeName = (e) => {
        console.log(e.target.value);
        setNama (e.target.value);
    };

    const changeGender = (e) => {
        setGender ("Laki - Laki");
    };

    const changeGender2 = (e) => {
        setGender ("Perempuan");
    };
  return (
    <div>
        <h1> Nama = {nama}</h1>
        <input type= "text" onChange={changeName}></input>

        <h1> Jenis Kelamin = {gender}</h1>
        <button onClick={changeGender}>Laki Laki</button>
        <button onClick={changeGender2}>Perempuan</button>
    </div>
  );
};
