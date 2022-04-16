import React from 'react'
// import { useState } from "react";
import CreateTugas from './CreateTugas';
import ListTugas from './ListTugas';

function Home() {

  // const Tugas = [ 
  //   {
  //     id: 1,
  //     title: "Mengerjakan Exercise",
  //     completed: true,
  //   },
  //   {
  //     id: 2,
  //     title: "Mengerjakan Assignment",
  //     completed: false,
  //   }
  // ];
  
  // const [getTugas, setTugas] = useState(Tugas)

  // const eventCreateTugas = (tugasBaru) => {
  //   console.log("Data tugas baru", tugasBaru)
  //   setTugas(getTugas.concat(tugasBaru));
  // }

  // const eventUpdateTugas = (indexUpdateTugas) => {
  //   console.log("index data update:", indexUpdateTugas)
  //   const updateTugas = [...getTugas];
  //   updateTugas[indexUpdateTugas].completed = true;
  //   setTugas(updateTugas)
  //   console.log("Data: ",updateTugas[indexUpdateTugas])
  // }

  // const eventDeleteTugas = (indexHapusTugas) => {
  //   console.log("index data hapus:", indexHapusTugas)
  //   setTugas(getTugas.filter((tugas, index) => index !== indexHapusTugas));
  // }

  return (
    <>
      <div className='container justify-content-center' style={{textAlign:'justify'}}>
        <h1 className='text-primary' style={{textAlign:'center'}}>Todos App</h1>
        <CreateTugas />
        <ListTugas /> 
      </div>  
    </>
  )
}

export default Home