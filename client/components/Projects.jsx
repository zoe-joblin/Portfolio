import React from 'react';
import { Link } from 'react-scroll';

const Projects = () => {
  return (
  <> 
    <h1>Projects</h1>
    <div className='container' id='projects'>
      <div className='project-div'>
        <h2>Awhina</h2>
        <p>A community-focussed app designed to help people request and offer help.</p>
        <a href='https://github.com/zoe-joblin/Aawhina'> 
        <p>Github</p> </a>
        <a href='https://aawhina.herokuapp.com/'> <p>Heroku</p> </a>
      </div>
      <div className='project-div'>
        <h2>Plantrackr</h2>
        <p>An app to document all of your house plants and keep track of all of their needs.</p>
        <a href='https://github.com/zoe-joblin/Plantrackr'> 
        <p> Github</p> 
        </a>
        <a href='https://plant-trackr.herokuapp.com/'> <p>Heroku</p>
        </a>
      </div>
    </div>
  </>
)}

export default Projects