import React, { Component } from 'react';
import axios from 'axios';
import './css/JobInputs.css';

export default class JobInputs extends Component {

    constructor(props){
        super(props)
        this.state ={
            jobTitleI:'',
            companyI:'',
            logoI:'',
            jobDescI:'',
            rating: props.ExistingRating || Math.floor(Math.random() * Math.floor(100)),
            applicants: props.ExistingApplicants || 0,
        }
    }

    // componentDidMount(){
    //     if(this.props.editingPost.id)
    // }

    add = ()=>{
        const {jobTitleI, companyI, logoI, jobDescI} = this.state;
        this.props.addJob(jobTitleI, companyI, logoI, jobDescI);
        this.setState({
            jobTitleI:'',
            companyI:'',
            logoI:'',
            jobDescI:'',
        })
    }

    handleChange = (target) =>{
        const {name, value} = target;
        this.setState({[name]: value});
    }

    render() {
        const {jobTitleI, companyI, logoI, jobDescI} = this.state;
        return (
            <div className="input-container">
                <div className='input-form'>
                    <input type="text" placeholder="Job Title" value={jobTitleI} name="jobTitleI" onChange={(e)=> this.handleChange(e.target)}/>
                    <input type="text" placeholder="Company Name" value={companyI} name="companyI" onChange={(e)=> this.handleChange(e.target)}/>
                    <input type="text" placeholder="Company Logo" value={logoI} name="logoI" onChange={(e)=> this.handleChange(e.target)}/>
                    <textarea type="text" placeholder="Job Description" value={jobDescI} name="jobDescI" onChange={(e)=> this.handleChange(e.target)}/>
                    <button onClick={()=> this.add()}>Add</button>
                    <button>Save</button>
                </div>
            </div>
            
        )
    }
}
