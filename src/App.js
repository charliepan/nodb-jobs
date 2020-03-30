import React from 'react';
import NavBar from './components/NavBar';
import JobListing from './components/JobListing'
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <JobListing/>
    </div>
  );
}

export default App;
