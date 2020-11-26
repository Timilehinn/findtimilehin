import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './navbar'
import Link from 'next/link'

export default function Home() {
  const _yg = "{ I'm your guy. }"
  return (
    <div className={styles.container}>
     <Head>
       <title>findtimilehin</title>
       <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link rel="shortcut icon" href="/ft.png" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
     </Head>
      <Navbar />
     <h1 style={{fontWeight:'bolder',textAlign:'center',fontSize:'2rem'}}>Need a Fullstack <br/>Web and App Developer?</h1>
     <h3>{_yg}</h3>
     <Link href="/about">
        <a style={{border:'3px solid grey',marginTop:'2rem',padding:'1rem'}}>Navigate to know more.</a>
     </Link>
     <h2 style={{marginTop:'200px'}}>Blog is coming soon...</h2>
     <p style={{textAlign:'center'}}>Hi there &#128075;, this blog will soon be filled, in the meantime, I will be posting on my <a style={{color:'blue'}} href="https://www.twitter.com/makiaveli96">twitter</a></p>
    </div>
  )
}