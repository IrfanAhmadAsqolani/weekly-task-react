import React from 'react'
import Home from './Components/Pages/Home'

function ReactHook() {
  return (
    <>
      <div className="row flex-nowrap">
        <div className="col-auto px-0">
          <div id="sidebar" className="collapse collapse-horizontal show border-end">
            <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
              <a href="/" className="list-group-item border-end-0 d-inline-block text-truncate bg-dark text-white text-center pt-4" data-bs-parent="#sidebar" style={{ height:"70px", paddingTop:"10px"}}><span>WEEKLY TASK REACT</span></a>
              <a href="/IntroductionReact" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Introduction React</span></a>
              <a href="/ReactFundamental" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>React Fundamental</span></a>
              <a href="/ReactRouting" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>React Routing</span></a>
              <a href="/EventHandling" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Event Handling</span></a>
              <a href="/ReactHook" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>React Hook</span></a>
              <a href="/ReactForm" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>React Form</span></a>
              <a href="/GlobalStateManagement" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Global State Management</span></a>
              <a href="/Testing" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Testing</span></a>
              <a href="/Deployment" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Deployment</span></a>
            </div>
          </div>
        </div>
        <main className="col ps-md-2 mt-0">
          <nav className="navbar navbar-dark bg-dark">
            <div className='container-fluid d-flex justify-content-between'>
              <div className="d-flex ">
                <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="pt-2 p-1 text-decoration-none"><i className="icon bi bi-list bi-lg py-2 p-1" /></a>
                <span className="navbar-brand ms-3 mb-0 h7">How to be an ideal Top Search React Front End Engineer</span>
              </div>
            </div>
          </nav>            
          <div className="container-fluid row">
            <div className="col-12 mt-2">
              <h2>React Hook</h2>
              <p>Melanjutkan aplikasi daftar tugas (todo list) pada tugas Event Handling dengan mengubah aplikasi daftar tugas 
                menjadi function component dan mengubah lifecycle method & state management menjadi menggunakan react hooks </p>
              <Home />
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default ReactHook