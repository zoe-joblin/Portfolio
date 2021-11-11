import React from 'react';
import { Link } from 'react-scroll';
// import Nav from 'react-bootstrap/Nav'

const NavBar = () => {

return (
  <div className='nav'>
   <Link className='link' to='home'>
    <button>Home</button>
   </Link>
   <Link className='link' to='projects'>
    <button>Projects</button>
   </Link>
   <Link className='link' to='contact'>
    <button>Contact</button>
   </Link>
  </div>
)}
export default NavBar