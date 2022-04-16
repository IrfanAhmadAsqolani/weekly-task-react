import React from 'react'
import './Content.css';
import { useSelector, useDispatch } from 'react-redux';
import { eventUpdateTugas, eventDeleteTugas } from '../store/todoSlice';

function Content(props) {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  return (
    <>
      <ul>
        {todos.map((item, index) => (
          <div style={{width:'100%', margin:'15px'}}>
            <li className='list-unstyled' style={{marginLeft:'100px'}} key={item.id}>
              <div className="d-flex justify-content-between" style={{width:'88%'}}>
                <div className='d-flex' style={{marginTop:'15px'}}>
                  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" style={{marginRight:'10px'}} 
                    onChange = {() => {
                      dispatch(eventUpdateTugas(index));
                    }} 
                    checked={item.completed} />
                  <p style={item.completed? {textDecoration: 'line-through', fontStyle:'italic', color:'grey'}: {} }>{item.title}</p>
                </div>
                <button type="button" className="btn btn-light" style={{marginLeft:'10px', borderRadius:'100px', width:'50px', height:'50px', outlineStyle:'initial', cursor:'pointer', padding:'6px 0px'}} 
                  onClick = {() => {
                    dispatch(eventDeleteTugas(index));
                  }}>Delete</button>
              </div>
            </li>
            <hr style={{margin: '5px 0px 5px 100px', width:'80%'}}/>
          </div>
        ))}
      </ul>
    </>
  )
}

export default Content