import React, { Component } from 'react';
import JobPost from './JobPost';
import JobInputs from './JobInputs'
import axios from 'axios';

export default class JobListing extends Component {
    constructor(){
        super()
        this.state = {
            jobs: [],
            toggleAorE: false 
        }
    }

    componentDidMount(){
        axios.get('/api/jobs').then(res=>{
            this.setState({jobs: res.data});
        }).catch(error=>{
            console.log(error);
        });
    }

    addJob = (job_title, company, logo, job_desc) =>{
        console.log({job_title},{company},{logo},{job_desc});
        axios.post('/api/jobs', {job_title, company, logo, job_desc}).then(res =>{
            this.setState({jobs:res.data});
            this.toggle();
        }).catch(error=>{
            console.log(error);
        });
    }

    toggle = () =>{
        this.setState({toggleAorE: !this.state.toggleAorE})
    }

    deletePost = (id) =>{
        axios.delete('/api/jobs/${id}').then(res=>{
            this.setState({jobs:res.data});
        }).catch(error=>{
            console.log(error);
        });
    }

    render() {
        console.log(this.state.jobs);
        return (
            <div>
                {
                    this.state.toggleAorE ? (
                        <JobInputs toggle={this.toggle} addJob={this.addJob}/>
                    ) : (
                        <button onClick={()=>this.toggle()}>Add a job</button>
                    )
                }
                
                {
                    this.state.jobs.map(job =>(
                        <JobPost toggleAorE={this.state.toggleAorE} deletePost={this.deletePost} key={job.id} addJob={this.addJob}  {...job}/>
                    ))
                }
            </div>
        )
    }
}
