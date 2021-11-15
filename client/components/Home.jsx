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
      <p>
        Kia ora koutou, ko Zoe Joblin tōku ingoa. Nō Ingarangi, nō Airangi nō Kotirani ōku tipuna. I whānau mai au I Ōtuatahi engari, kei te Whanganui-a-tara ahau e noho ana ai.
      </p>
      <p>
        I am a Wellington-based web developer and have recently finished the web development bootcamp at Enspiral Dev Academy. I am a person driven by curiosity and a desire to learn new things, connect with people and create positive change in Aotearoa. This is why I was drawn to the tech industry. I absolutely love the combinations of creativity and process, autonomy and collaboration that are possible within the realm of technology.
      </p>
    </div> 
    <div className="container" id='project-header' >
      <Projects/>
    </div>
    <div className="container" id='contact' >
      <Contact/>
    </div>
  </div>
)}

export default Home
