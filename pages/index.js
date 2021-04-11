import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
     <Head>
       <title>findtimilehin</title>
       <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link rel="shortcut icon" href="/ft.png" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
     </Head>
      <Navbar />
      <div style={{marginTop:'130px',color:'white',display:'flex',flexDirection:'column', alignItems:'center'}}>
        <h1 style={{fontWeight:'bolder',lineHeight:'60px',textAlign:'center',fontSize:'2rem'}}>Hi,<br/> I'm Timilehin <br/>a Fullstack Web and App Developer</h1>
        <Link href="/about">
            <a style={{border:'3px solid grey',marginTop:'2rem',padding:'1rem'}}>Navigate to know more.</a>
        </Link>
        <h2 style={{marginTop:'200px'}}>Blog is coming soon...</h2>
        <p style={{textAlign:'center'}}>Hi there &#128075;, this blog will soon be filled, in the meantime, I will be posting on my <a style={{color:'blue'}} href="https://www.twitter.com/makiaveli96">twitter</a></p>
     </div>
    </div>
  )
}
