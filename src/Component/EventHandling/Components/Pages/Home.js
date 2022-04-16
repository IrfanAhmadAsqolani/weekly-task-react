import React from 'react'
import { useState } from "react";
import CreateTugas from './CreateTugas';
import ListTugas from '../ListTugas';

function Home() {
  const [getTugas, setTugas] = useState([ 
    {
      id: 1,
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Assignment",
      completed: false,
    }
  ]);
  
  const eventCreateTugas = (tugasBaru) => {
    console.log("id tugas baru", tugasBaru)
    setTugas(getTugas.concat(tugasBaru));
  }

  const eventUpdateTugas = (indexUpdateTugas) => {
    const updateTugas = [...getTugas];
    updateTugas[indexUpdateTugas].completed = true;
    setTugas(updateTugas)
  }

  const eventDeleteTugas = (hapusTugas) => {
    setTugas(getTugas.filter((tugas, index) => index !== hapusTugas));
  }

  return (
    <>
      <div className='container justify-content-center' style={{textAlign:'justify'}}>
        <h1 style={{textAlign:'center', color:'grey'}}>Todos App</h1>
        <CreateTugas onCreateTugas = {eventCreateTugas}/>
        <ListTugas daftarTugas = {getTugas} onDeleteTugas = {eventDeleteTugas} onUpdateTugas = {eventUpdateTugas}/> 
      </div>  
    </>
  )
}

export default Home