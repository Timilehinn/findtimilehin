import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import style from '../styles/projects.module.css'

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
            <h1 style={{textAlign:'center',marginTop:'100px'}}>Some of my Work.</h1>
            <br />
            <div className={style.img_div}>
                <a style={{margin:'1rem'}} href="http://coinnex.co"><img src="/1.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="https://pacavel.herokuapp.com"><img src="/2.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="http://www.adewaleplantation.com"><img src="/3.png" width="280px" height="500px" /></a>
                <a style={{margin:'1rem'}} href="http://blu-periscope.herokuapp.com"><img src="/4.png" width="280px" height="500px" /></a>
            </div>
        </div>
    )
}

export default Projects
