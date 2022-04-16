import React from 'react'
import './Content.css';

function Content(props) {
  return (
    <>
        {props.daftarTugas.map((item) => (
            <div style={{display:'flex'}}>
            <p style={item.completed ? {textDecoration: "line-through", border: '2px solid grey', marginLeft: '30px', borderRadius: '25px', padding:'10px', marginTop:'5px', marginBottom:'5px'} : 
                    {border: '2px solid grey', marginLeft: '30px', borderRadius: '25px', padding:'10px', marginTop:'5px', marginBottom:'5px'}}>
                {item.title}
            </p>
            </div>
        ))}
    </>
  )
}

export default Content;