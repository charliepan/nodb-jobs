import React, { Component } from 'react';
import JobPost from './JobPost';
import JobInputs from './JobInputs';
import Search from './Search';
import axios from 'axios';

export default class JobListing extends Component {
    constructor(props){
        super(props)
        console.log(props.jobs);
        this.state = {
            jobs: props.jobs,
            toggleAorE: false,
            editingJob:{}
        }
    }

    addJob = (job_title, company, logo, job_desc, rating, applicants,applied) =>{
        console.log({job_title},{company},{logo},{job_desc},{rating},{applicants});
        axios.post('/api/jobs', {job_title, company, logo, job_desc, rating, applicants,applied}).then(res =>{
            this.setState({jobs:res.data});
            this.toggle();
        }).catch(error=>{
            console.log(error);
        });
    }

    applyJob = (id) =>{
        axios.put(`/api/jobs/${id}/apply`).then(res=>{
            this.setState({jobs:res.data});
        }).catch(error=>{
            console.log(error);
        });
    }

    toggle = (id) =>{
        if(id){
            const [job] = this.state.jobs.filter(val => val.id === id);
            this.setState({toggleAorE: !this.state.toggleAorE, editingJob: job})
        }
        else{
            this.setState({toggleAorE: !this.state.toggleAorE, editingJob: {}})
        }
    }

    deletePost = (id) =>{
        //console.log(id);
        axios.delete(`/api/jobs/${id}`).then(res=>{
            this.setState({jobs:res.data});
        }).catch(error=>{
            console.log(error);
        });
    }

    saveJob=(id, job_title, company, logo, job_desc, rating, applicants, applied) =>{
        axios.put(`/api/jobs/${id}`,{job_title, company, logo, job_desc, rating, applicants, applied}).then(res=>{
            this.setState({jobs:res.data, toggleAorE:false})

        })
    }

    searching=(text)=>{
        axios.get(`/api/jobs/search?filter=${text}`).then(res=>{
          this.setState({jobs: res.data});
          console.log(this.state.jobs);
        }).catch(error=>{
            console.log(error);
        });
    }
    
    render() {
        console.log(this.state.jobs);
        return (
            <div>
                <Search searching={this.searching}/>
                {
                    this.state.toggleAorE ? (
                        <JobInputs saveJob={this.saveJob} editingJob={this.state.editingJob} toggle={this.toggle} addJob={this.addJob}/>
                    ) : (
                        <button onClick={()=>this.toggle()}>Add Job</button>
                    )
                }
                
                {
                    this.state.jobs.map(job =>(
                        <JobPost toggleAorE={this.state.toggleAorE} deletePost={this.deletePost} applyJob={this.applyJob} key={job.id} addJob={this.addJob} toggle={this.toggle} {...job}/>
                    ))
                }
            </div>
        )
    }
}
