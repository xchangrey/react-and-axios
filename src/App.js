import React, { Component } from 'react';
import './App.css';
import Intro from './components/intro';
import BlogPage from './components/posts';

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <BlogPage />
      </div>
    );
  }
}

export default App;
