import React from 'react'
import logo_atas from './asset/img/logo-ALTA@2x.png'
import foto_profil from './asset/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg'
import './asset/css/main.css'

function Home() {
  return (
    <div>
        <div>
            <header>
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                        <div className="alterra">
                        <a href="Home.js"><img className="logo-atas" src={logo_atas} /></a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        {/* <div class="container"> */}
                        <div className="row align-items-center navig">
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="#" className="aktif">HOME</a></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-center"><a href="#">ABOUT</a></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-left"><a href="#">EXPERIENCE</a></div>
                        <div className="col-lg-3 col-md-3 col-sm-3 text-md-center text-sm-center text-lg-right"><a href="#">CONTACT</a></div> 
                        </div>
                        {/* </div> */}
                    </div>    
                    </div>
                </div> 
            </header>
        <div className="container h-100">
            <div className="row align-items-center isi-home">
                <div className="col-lg-4 col-md-12 col-sm-12  col-12">
                <img id="foto-profil" src={foto_profil} />
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                <div className="main-p">
                    <p className="sapaan">Hi, my name is </p>
                    <p className="nama">Anne Sullivan</p>
                    <p className="hobi">I build things for the web</p>
                    <p className="tombol"><a href="About.js">Get In Touch</a></p>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home