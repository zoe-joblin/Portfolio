import React from 'react'
import NavBar from './Nav'
import Projects from './Projects'
import Contact from './Contact'

const Home = () => {
  return (
  <div className="main" >
    <NavBar/>
    <div className="container" id='home'>
      <h1> ✨ Zoe Joblin ✨ </h1>
      <h2>Web Development Portfolio</h2>
    </div> 
    <div className="container" id='projects' >
      <Projects/>
    </div>
    <div className="container" id='contact' >
      <Contact/>
    </div>
  </div>
)}

export default Home
