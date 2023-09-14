import React from 'react' //rafc

export const Homepage = () => {
    let nama = "Radhiya Sabila";
    let umur = 21;
    let hobi = "makan";
    let input = () => {
        return <input></input>
    }
  return (
    <div>
        <h1>Nama : {nama}</h1>
        <h1>Umur : {umur} tahun</h1>
        <h1>Hobi : {hobi}</h1>
        <h1>Input : {input()}</h1>
    </div>
  )
}
