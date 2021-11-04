import React from 'react';
import { Route } from 'react-router-dom'
import Home from './Home'
// import Container from 'react-bootstrap/Container';
import NavBar from './Nav'
import Contact from './Contact'
import Projects from './Projects'
// import './App.css';

function App () {
  return (
  <>
      <Route path='/' component={NavBar} />
      <Route exact path='/' component={Home} />
      <Route exact path='/projects' component={Projects} />
      <Route exact path='/contact' component={Contact} />
  </>
)}

export default App