import React, { Component } from 'react';
import Header from './components/Header.js';
import Intro from './components/Intro.js';
import Social from './components/Social.js';
import './App.css';

export default class App extends Component {

  state = {
  }

  render(){
    return (
      <div className='app-container'>
        <Header/>
        <Intro/>
        <Social/>
      </div>
    );
  }
}
