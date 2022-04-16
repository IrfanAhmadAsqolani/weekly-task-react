import React from 'react'
import App from './App'
import SS_Home from './Foto/Screenshot_Home.png'
import SS_About from './Foto/Screenshot_About.png'
import SS_Contact from './Foto/Screenshot_Contact_Us.png'


function IntroductionReact() {
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
              <h2>Introduction React</h2>
              <p>Membuat sebuah halaman website bersumber dari asset yang sudah diberikan dan mengubah file html menjadi 
                javascript menggunakan react</p>
                <a href='https://introduction-react.vercel.app/About' target="_blank" rel='noreferrer'>Halaman Website task Introduction React</a><br />
                <img src={SS_Home} style={{ height:"30%", width:"50%" }} alt="" /> <br /><br />
                <img src={SS_About} style={{ height:"30%", width:"50%" }} alt="" /> <br /><br />
                <img src={SS_Contact} style={{ height:"30%", width:"50%" }} alt="" /> <br /><br />
              {/* <App /> */}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default IntroductionReact