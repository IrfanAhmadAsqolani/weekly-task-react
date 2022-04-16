import React from 'react'
import './style.css'
import foto_profil from './foto-profil.jpg'
// import EventHandling from '../Component/EventHandling'
// import IntroductionReact from '../Component/IntroductionReact'
// import ReactForm from '../Component/ReactForm'
// import ReactFundamental from '../Component/ReactFundamental'
// import ReactHook from '../Component/ReactHook'
// import ReactRouting from '../Component/ReactRouting'
// import GlobalStateManagement from '../Component/GlobalStateManagement'
// import Deployment from '../Component/Deployment'
// import ReactTesting from '../Component/ReactTesting'

function HomePage() {
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
            <div className="container-fluid d-flex justify-content-between">
              <div className="d-flex"> 
                <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="pt-2 p-1 text-decoration-none"><i className="icon bi bi-list bi-lg py-2 p-1" /></a>
                <span className="navbar-brand ms-3 mb-0 h7">How to be an ideal Top Search React Front End Engineer</span>
              </div>
            </div>
          </nav>            
          <div className="container-fluid row">
            <div className="col-12">
              <div className='d-flex justify-content-around'>
                <div style={{ marginTop:"200px"}}>
                  <h4>Nama : Irfan Ahmad Asqolani</h4>
                  <h4>Kelas : C</h4>
                  <h4>Program : How to be an Ideal Top Search React JS Front End Engineer</h4>
                </div>
                <img className='rounded-circle' src={foto_profil} style={{ height:"200px", marginTop:"150px" }}  alt="img" />
              </div>
            </div>
          </div>
        </main>
      </div>
      


      {/* // <nav className="navbar navbar-dark bg-dark">
      //   <div className="container-fluid d-flex justify-content-between">
      //     <span className="navbar-brand mb-0 h7">How to be an ideal Top Search React Front End Engineer</span>
      //     <span className="navbar-brand mb-0 h7">Irfan Ahmad Asqolani Kelas C</span>
      //   </div>
      // </nav>  

      // <div className='container mt-4 mb-3 text-center'>
      //   <p>Nama : Irfan Ahmad Asqolani</p>
      //   <p>Kelas : C</p>
      //   <p>Program : How to be an Ideal Top Search React JS Front End Engineer</p>
      // </div>    

      // <section className='container mt-4'>
      //   <div className="d-flex align-items-start" style={{ border:"1px solid grey", borderRadius:'10px'}}>
      //     <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{borderRight:"1px solid grey", borderRadius:"10px"}}>
      //       <button className="nav-link active" id="v-pills-intro-tab" data-bs-toggle="pill" data-bs-target="#v-pills-intro" type="button" role="tab" aria-controls="v-pills-intro" aria-selected="true" style={{textAlign:"left"}}>Introduction React</button>
      //       <button className="nav-link" id="v-pills-fundamental-tab" data-bs-toggle="pill" data-bs-target="#v-pills-fundamental" type="button" role="tab" aria-controls="v-pills-fundamental" aria-selected="false" style={{textAlign:"left"}}>React Fundamental</button>
      //       <button className="nav-link" id="v-pills-routing-tab" data-bs-toggle="pill" data-bs-target="#v-pills-routing" type="button" role="tab" aria-controls="v-pills-routing" aria-selected="false" style={{textAlign:"left"}}>React Routing</button>
      //       <button className="nav-link" id="v-pills-eventhandling-tab" data-bs-toggle="pill" data-bs-target="#v-pills-eventhandling" type="button" role="tab" aria-controls="v-pills-eventhandling" aria-selected="false" style={{textAlign:"left"}}>Event Handling</button>
      //       <button className="nav-link" id="v-pills-hook-tab" data-bs-toggle="pill" data-bs-target="#v-pills-hook" type="button" role="tab" aria-controls="v-pills-hook" aria-selected="false" style={{textAlign:"left"}}>React Hook</button>
      //       <button className="nav-link" id="v-pills-form-tab" data-bs-toggle="pill" data-bs-target="#v-pills-form" type="button" role="tab" aria-controls="v-pills-form" aria-selected="false" style={{textAlign:"left"}}>React Form</button>
      //       <button className="nav-link" id="v-pills-gsm-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gsm" type="button" role="tab" aria-controls="v-pills-gsm" aria-selected="false" style={{textAlign:"left"}}>Global State Management</button>
      //       <button className="nav-link" id="v-pills-testing-tab" data-bs-toggle="pill" data-bs-target="#v-pills-testing" type="button" role="tab" aria-controls="v-pills-testing" aria-selected="false" style={{textAlign:"left"}}>Testing</button>
      //       <button className="nav-link" id="v-pills-deploy-tab" data-bs-toggle="pill" data-bs-target="#v-pills-deploy" type="button" role="tab" aria-controls="v-pills-deploy" aria-selected="false" style={{textAlign:"left"}}>Deployment</button>
      //     </div>
      //     <div className="tab-content" id="v-pills-tabContent">
      //       <div className="tab-pane fade show active" id="v-pills-intro" role="tabpanel" aria-labelledby="v-pills-intro-tab">
      //         <IntroductionReact/>
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-fundamental" role="tabpanel" aria-labelledby="v-pills-fundamental-tab">
      //         <ReactFundamental />
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-routing" role="tabpanel" aria-labelledby="v-pills-routing-tab">
      //         <ReactRouting />
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-eventhandling" role="tabpanel" aria-labelledby="v-pills-eventhandling-tab">
      //         <EventHandling />
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-hook" role="tabpanel" aria-labelledby="v-pills-hook-tab">
      //         <ReactHook />
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-form" role="tabpanel" aria-labelledby="v-pills-form-tab">
      //         <ReactForm /> 
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-gsm" role="tabpanel" aria-labelledby="v-pills-gsm-tab">
      //         <GlobalStateManagement />
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-testing" role="tabpanel" aria-labelledby="v-pills-testing-tab">
      //         <ReactTesting />
      //       </div>
      //       <div className="tab-pane fade" id="v-pills-deploy" role="tabpanel" aria-labelledby="v-pills-deploy-tab">
      //         <Deployment />
      //       </div>
      //     </div>
      //   </div>
      // </section> */}


    </>
  )
}

export default HomePage