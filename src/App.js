import React, { Component } from 'react';
import NavBar from './components/NavBar';
import JobListing from './components/JobListing';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
        jobs: [],
    }
  }
  
  componentDidMount(){
    axios.get('/api/jobs').then(res=>{
        this.setState({jobs: res.data});
        console.log(this.state.jobs);
    }).catch(error=>{
        console.log(error);
    });
  }

  render(){

    return (
      <div className="App">
        <NavBar/>
        {
          this.state.jobs && this.state.jobs.length > 0 && <JobListing jobs={this.state.jobs}/>
        }
      </div>
    );
  }
}

export default App;
