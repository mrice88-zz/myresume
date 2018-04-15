import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
const resume = require('./resume.json');

class App extends Component {
  render() {
    const profileData = resume.basics;
    const aboutData = resume.summary;
    const workData = resume.work;
    const skillsData = resume.skills;
    const educationData = resume.education;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
