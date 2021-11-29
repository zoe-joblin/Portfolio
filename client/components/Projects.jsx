import React from 'react';
import { Link } from 'react-scroll';

const Projects = () => {
  return (
  <> 
    <h1 id='project-header'>Projects</h1>
    <div className='projects'>
      <div className='box'>
        <h2>Awhina</h2>
        <img src='images/Screen Shot 2021-11-23 at 1.43.24 PM.png'/>
        <p>A community-focussed app designed to help people request and offer help.</p>
        <a href='https://github.com/zoe-joblin/Aawhina'>Github </a>
        <a href='https://aawhina.herokuapp.com/'>Heroku</a>
      </div>
      <div className='box'>
        <h2>Plantrackr</h2>
        <img src='images/Screen Shot 2021-11-23 at 1.44.57 PM.png'/>
        <p>An app to document all of your house plants and keep track of all of their needs.</p>
        <a href='https://github.com/zoe-joblin/Plantrackr'> Github</a>
        <a href='https://plant-trackr.herokuapp.com/'>Heroku</a>
      </div>
    </div>
  </>
)}

export default Projects