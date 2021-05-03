import React from 'react'
import Navbar from './navbar'
import Head from 'next/head'
import style from '../styles/projects.module.css'
import {
    FaCode,
    FaEye
 } from 'react-icons/fa'

function ProjectsBox(props){
    return(
        <div>
            <h2 style={{color:'white'}}>{props.name}</h2>
            <p>{props.technologies}</p>
            <p>{props.about}</p>
            <p><a style={{textDecoration:'underline',fontWeight:'lighter',grey:'blue'}} href={props.site_url}>Site</a> <a style={{fontWeight:'lighter',textDecoration:'underline',grey:'blue'}} href={props.repo_url}>Repo</a></p>
        </div>
    )
}



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
                <ProjectsBox 
                    name="Bejamas Demo" 
                    technologies="React, Javascript, NodeJs" 
                    about="PoC of an eCommerce website." 
                    site_url="https://bejamas-demo.herokuapp.com"
                    repo_url="https://www.github.com/Timilehinn/bejamas-test"    
                />
                <ProjectsBox
                    name="Naijchat"
                    technologies="React,NodeJs,Socketio and Postgresql"
                    about="A topic sharing and group messaging platform."
                    site_url="https://naij.netlify.app"
                    repo_url="https://www.github.com/Timilehinn/naijchat-web"
                />
                <ProjectsBox
                    name="Naijchat Mobile"
                    technologies="React-native,NodeJs,Socketio and Postgresql"
                    about="Android version of Naijchat."
                    repo_url="https://www.github.com/Timilehinn/naijchat-android"
                />
                <ProjectsBox
                    name="Pacavel"
                    technologies="JS,HTML,CSS,Postgresql and NodeJs"
                    about="A Software development company website."
                    site_url="http://www.pacavel.com"
                />
                <ProjectsBox
                    name="Findtimilehin"
                    technologies="NextJs"
                    about="My personal porfolio website (this website)."
                    repo_url="https://www.github.com/Timilehinn/findtimilehin"
                />
                <ProjectsBox
                    name="Adebowale Estate and Farm"
                    technologies="JS,HTML,CSS,Postgresql and NodeJs"
                    about="A real estate and farm website."
                    site_url="https://adebowale-test.herokuapp.com"
                />
                <p><span style={{color:'white'}}>Inspired</span> by <a style={{fontWeight:'lighter',textDecoration:'underline'}} href="https://kadet.dev">Kadet.dev</a></p>
                
            </div>
        </div>
    )
}

export default Projects
