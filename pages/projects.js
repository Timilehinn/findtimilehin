import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import style from '../styles/projects.module.css'
import {
    FaCode,
    FaEye
 } from 'react-icons/fa'
function Projects() {
    return (
        <div>
             <Head>
                <title>Projects - findtimilehin</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="shortcut icon" href="/ft.png" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
            </Head>
            <Navbar />
            <h3 style={{textAlign:'center',color:'white',marginTop:'100px'}}>Some of my Work.</h3>
            <br />
            <div className={style.img_div}>
                <div>
                    <h2 style={{color:'white'}}>Naijchat</h2>
                    <p>React,NodeJs,Socketio and Postgresql</p>
                    <p>A topic sharing and group messaging platform.</p>
                    <p><a style={{textDecoration:'underline',fontWeight:'lighter',grey:'blue'}} href="https://naij.netlify.app">Site</a> <a style={{fontWeight:'lighter',textDecoration:'underline',grey:'blue'}} href="https://www.github.com/Timilehinn/naijchat-web">Repo</a></p>
                </div>
                <div>
                    <h2 style={{color:'white'}}>Naijchat Mobile</h2>
                    <p>React-native,NodeJs,Socketio and Postgresql</p>
                    <p>Android version of Naijchat built.</p>
                    <p><a style={{fontWeight:'lighter',textDecoration:'underline',grey:'blue'}} href="https://www.github.com/Timilehinn/naijchat-android">Repo</a></p>
                </div>
                <div>
                    <h2 style={{color:'white'}}>Pacavel</h2>
                    <p>JS,HTML,CSS,Postgresql and NodeJs</p>
                    <p>A Software development company website.</p>
                    <p><a style={{fontWeight:'lighter',textDecoration:'underline',grey:'blue'}} href="http://www.pacavel.com">Site</a></p>
                </div>
                <div>
                    <h2 style={{color:'white'}}>Findtimilehin</h2>
                    <p>NextJs</p>
                    <p>My personal porfolio website (this website).</p>
                    <p><a style={{fontWeight:'lighter',textDecoration:'underline',grey:'blue'}} href="https://www.github.com/Timilehinn/findtimilehin">Repo</a></p>
                </div>
                <div>
                    <h2 style={{color:'white'}}>Adebowale Estate and Farm</h2>
                    <p>JS,HTML,CSS,Postgresql and NodeJs</p>
                    <p>A real estate and farm website.</p>
                    <p><a style={{fontWeight:'lighter',textDecoration:'underline',grey:'blue'}} href="https://adebowale-test.herokuapp.com">Site</a></p>
                </div>
                <p><span style={{color:'white'}}>Inspired</span> by <a style={{fontWeight:'lighter',textDecoration:'underline'}} href="https://kadet.dev">Kadet.dev</a></p>
                {/* <a style={{margin:'1rem'}} href="http://coinnex.co"><img src="/1.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="https://pacavel.herokuapp.com"><img src="/2.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="http://www.adewaleplantation.com"><img src="/3.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="http://blu-periscope.herokuapp.com"><img src="/4.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="http://coinnex.co"><img src="/1.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="https://pacavel.herokuapp.com"><img src="/2.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="http://www.adewaleplantation.com"><img src="/3.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="http://blu-periscope.herokuapp.com"><img src="/4.png" width="280px" height="500px" /></a> */}
            </div>
        </div>
    )
}

export default Projects
