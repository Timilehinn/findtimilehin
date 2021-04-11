import React from 'react'
import Link from 'next/link'
import { FaTwitter, FaEnvelope } from 'react-icons/fa'

export default class Navbar extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
             bar1Y:0,
             bar2Y:0,
             bar1Rot:0,
             bar2Rot:0,
             navHeight:'0vh',
             li1:-250,
             li2:-250,
             li3:-250,
             li4:-250,
             li5:-250,
        }
    }
    toggle =()=>{
        if(this.state.bar1Y === 0){
            this.setState({
                bar1Y:6,
                bar2Y:-6,
                bar1Rot:405,
                bar2Rot:-405,
                navHeight:'100vh',
                li1:1,
                li2:1,
                li3:1,
                li4:1,
                li5:1,


            })
        }else{
            this.setState({
                bar1Y:0,
                bar2Y:0,
                bar1Rot:0,
                bar2Rot:0,
                navHeight:'0vh',
                li1:-250,
                li2:-250,
                li3:-250,
                li4:-250,
                li5:-250,


            })
        }
       
    }
    render(){
        
        return (
            <>
            <div style={{position:'fixed',zIndex:'100',top:'0'}}>
                <div style={{width:'100vw',display:'flex',alignItems:'center',height:'60px',backgroundColor:'rgb(14, 13, 13)'}}>
                    <Link href="/">
                      <p style={{cursor:'pointer',marginLeft:'3vw',color:'white',fontSize:'1.7rem', fontFamily: 'Pacifico'}}>findtimilehin.</p>
                    </Link>
                    {/* TOGGLER */}
                    <div onClick={this.toggle} style={{position:'absolute',right:'3vw'}}>
                        <div style={{width:'30px',height:'1px',marginBottom:'10px',backgroundColor:'white',transition:'.6s',transform:`translateY(${this.state.bar1Y}px) rotate(${this.state.bar1Rot}deg)`}}></div>
                        <div style={{width:'30px',height:'1px',backgroundColor:'white',transition:'.6s',transform:`translateY(${this.state.bar2Y}px) rotate(${this.state.bar2Rot}deg)`}}></div>
                    </div>
                    
                </div>
            </div>
            <ul style={{width:'100vw',position:'fixed',top:'40px',transition:'.6s',height:this.state.navHeight,backgroundColor:'lightgrey'}}>
                <br />
                <br />
                <br />
                <Link href="/">
                  <li style={{cursor:'pointer',fontSize:'2.5rem',marginBottom:'1rem',position:'relative',fontWeight:'bolder',listStyleType:'none',transition:'.2s',transform:`translateX(${this.state.li1}%)`}}>Home</li>
                </Link>
                <Link href="/about">
                  <li style={{cursor:'pointer',fontSize:'2.5rem',marginBottom:'1rem',position:'relative',fontWeight:'bolder',listStyleType:'none',transition:'.4s',transform:`translateX(${this.state.li2}%)`}}>About Me</li>
                </Link>
                <Link href="/projects">
                    <li style={{cursor:'pointer',fontSize:'2.5rem',marginBottom:'1rem',position:'relative',fontWeight:'bolder',listStyleType:'none',transition:'.6s',transform:`translateX(${this.state.li3}%)`}}>Projects</li>
                </Link>
                <Link href="/skills">
                    <li style={{cursor:'pointer',fontSize:'2.5rem',marginBottom:'1rem',position:'relative',fontWeight:'bolder',listStyleType:'none',transition:'.8s',transform:`translateX(${this.state.li4}%)`}}>Skills</li>
                </Link>
                <li style={{cursor:'pointer',fontSize:'2.5rem',position:'relative',fontWeight:'bolder',listStyleType:'none',transition:'1s',transform:`translateX(${this.state.li5}%)`}}>
                  <a href="https://www.twitter.com/makivalie96"><FaTwitter style={{marginRight:'1rem'}} color="#00acee" size={30}/></a>
                  <a href="mailto:makindetimin@gmail.com"><FaEnvelope color="#bb001b" size={30} /></a>
                </li>
            </ul>
            </>
        )
    }
  
}
