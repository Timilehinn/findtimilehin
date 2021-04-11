import Navbar from './navbar'
import Head from 'next/head'
import style from '../styles/about.module.css'
import { FaAndroid } from 'react-icons/fa'


function About() {
    return (
        <div>
            <Head>
                <title>About Me - findtimilehin</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link rel="shortcut icon" href="/ft.png" />
                <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
            </Head>
            <Navbar />
           
            <div className={style.header_div}>
                <h1 style={{textAlign:'center'}}>Who Am I.</h1>
                <p style={{lineHeight:'30px',textAlign:'center'}}>I'm Makinde Timilehin, I'm a Backend Heavy Software Developer <br />
                 with experience in Javascript, React/React Native, Nodejs and Databse Development. Presently I'm Working part-time at my own<br/> web dev company,<a style={{color:'blue'}} href="https://pacavel.herokuapp.com"> Pacavel</a>, I love designing cool user interfaces <br/> and working on the backend of Applications. </p>
                 <br/>
                 <br/>
                 <br/>
                 <h3 style={{textAlign:'center'}}>My Strengths.</h3>
                 {/* <div style={{width:}}> */}
                    <span style={{padding:'1rem',marginBottom:'.5rem',width:'250px',alignSelf:'center',textAlign:'center',border:'.5px solid lightgrey'}}>Backend Dev</span>
                    <span style={{padding:'1rem',marginBottom:'.5rem',width:'250px',alignSelf:'center',textAlign:'center',border:'.5px solid lightgrey'}}>Web Development</span>
                    <span style={{padding:'1rem',marginBottom:'.5rem',width:'250px',alignSelf:'center',textAlign:'center',border:'.5px solid lightgrey'}}><FaAndroid color="#3ddc84"/> Android App Development</span>
                    <span style={{padding:'1rem',marginBottom:'.5rem',width:'250px',alignSelf:'center',textAlign:'center',border:'.5px solid lightgrey'}}>UI/UX Design</span>
                    {/* <span style={{padding:'1rem',marginBottom:'.5rem',width:'250px',alignSelf:'center',textAlign:'center',border:'.5px solid lightgrey'}}>Responsive Design</span> */}
                    <span style={{padding:'1rem',marginBottom:'.5rem',width:'250px',alignSelf:'center',textAlign:'center',border:'.5px solid lightgrey'}}>Search Engine Optimization</span>
                    <span style={{padding:'1rem',marginBottom:'.5rem',width:'250px',alignSelf:'center',textAlign:'center',border:'.5px solid lightgrey'}}>Database Management</span>
                {/* </div> */}
            </div>
        </div>
    )
}

export default About
