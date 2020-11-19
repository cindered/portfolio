import React, { Component } from 'react';
import Header from './components/Header.js';
import About from './components/About.js';
import Social from './components/Social.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';
import './App.css';

export default class App extends Component {

  render(){
    return (
      <div className='app-container'>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Social/>
      </div>
    );
  }
}
