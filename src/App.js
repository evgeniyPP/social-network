import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Content from './components/Content';
import '../src/styles/App.css';

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Content />
    </div>)
}
  

export default App;
