import React from 'react'
import { useState } from "react";

function CreateTugas(props) {
    const [getInputTugas, setInputTugas] = useState('');
    
    let handleChange = (e) =>{
        setInputTugas(e.target.value);
    };
    
    let handleSubmit = (e) =>{
        e.preventDefault();

        const newTugas = {
            id : Math.floor(Math.random() * 100) + 1,
            title : getInputTugas,
            completed : false
        }

        if (getInputTugas === ""){
            alert("Masukan Tugas terlebih dahulu");
        }else {
            props.onCreateTugas(newTugas);
        }

        setInputTugas('');
    };

  return (
    <>
        <div className='justify-content-center d-flex rounded-full border-1'>
            <input onChange={handleChange} value={getInputTugas} type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Add todo...' 
                style={{marginLeft:'45px', width:'75%', borderRadius:'20px 0px 0px 20px'}} />
            <button type="button" className="btn btn-primary" onClick={handleSubmit} style={{borderRadius:'0px 20px 20px 0px'}}>Submit</button>
        </div>
    </>
  )
}

export default CreateTugas