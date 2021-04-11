// import React from 'react'
import Navbar from './navbar'
import {
    FaJs, 
    FaReact, 
    FaCss3, 
    FaHtml5, 
    FaNodeJs, 
    FaLinux, 
    FaGitSquare,
    FaDatabase,
    FaAtom,
    FaPy,
    FaPython,
    FaJava
 } from 'react-icons/fa'
 import Head from 'next/head'


function Skills() {
    return (
        <div>
            <Head>
                <title>Skills - findtimilehin</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="shortcut icon" href="/ft.png" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
            </Head>
            <Navbar />
            <h1 style={{fontWeight:'bolder',marginTop:'120px',color:'white',fontSize:'2rem',textAlign:'center'}}>My Skills.</h1>

            <div style={{marginTop:'50px',color:'white',display:'flex',justifyContent:"center"}}>
                <div style={{textAlign:'center',margin:'1rem'}}>
                    <span style={{fontSize:'.55rem'}}><FaJs color="yellow" size={45}/><p>Javascript</p></span>
                    <span style={{fontSize:'.55rem'}}><FaReact color="cyan" size={45}/><p>React/RNative</p></span>
                    <span style={{fontSize:'.55rem'}}><FaNodeJs color="green" size={45}/><p>Node/ExpressJs</p></span>
                    <span style={{fontSize:'.55rem'}}><FaHtml5 color="#b22222" size={45}/><p>HTML</p></span>
                    <span style={{fontSize:'.55rem'}}><FaCss3 color="#2965f1" size={45}/><p>CSS3</p></span>
                </div>
                <div style={{textAlign:'center',margin:'1rem'}}>
                    <span style={{fontSize:'.55rem'}}><FaDatabase color="grey" size={45}/><p>Postgresql</p></span>
                    <span style={{fontSize:'.55rem'}}><FaAtom color="blue" size={45}/><p>ElectronJS</p></span>
                    <span style={{fontSize:'.55rem'}}><FaLinux size={45}/><p>Linux</p></span>
                    <span style={{fontSize:'.55rem'}}><FaGitSquare color="#f34f29" size={45}/><p>Git</p></span>
                    <span style={{fontSize:'.55rem'}}><FaJava color="#4b8bbe" size={45}/><p>Java</p></span>
                </div>
            </div>
        </div>
    )
}

export default Skills
