import React, { Component } from 'react';
import './css/JobInputs.css';

export default class JobInputs extends Component {

    constructor(props){
        super(props)
        this.state ={
            jobTitleI:'',
            companyI:'',
            logoI:'',
            jobDescI:'',
            rating: props.editingJob.rating ? props.editingJob.rating : Math.floor(Math.random() * Math.floor(100)),
            applicants: props.editingJob.applicants ? props.editingJob.applicants : 0,
            applied:props.editingJob.applied ? props.editingJob.applied : 0,
        }
    }

    componentDidMount(){
        if(this.props.editingJob.id){
            const {job_title, company, logo, job_desc} = this.props.editingJob
            this.setState({
                jobTitleI:job_title,
                companyI:company,
                logoI:logo,
                jobDescI:job_desc,
            })
        }
    }

    add = ()=>{
        const {jobTitleI, companyI, logoI, jobDescI, rating, applicants, applied} = this.state;
        console.log(rating, applicants);
        this.props.addJob(jobTitleI, companyI, logoI, jobDescI, rating, applicants, applied);
        this.setState({
            jobTitleI:'',
            companyI:'',
            logoI:'',
            jobDescI:'',
        })
    }

    save = ()=>{
        const {jobTitleI, companyI, logoI, jobDescI, rating, applicants, applied} = this.state;
        this.props.saveJob(this.props.editingJob.id,jobTitleI, companyI, logoI, jobDescI, rating, applicants, applied);
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
                    {this.props.editingJob.id ? (
                        <button onClick={()=>this.save()}>Save</button>
                    ): (
                        <button onClick={()=> this.add()}>Add</button>
                    )}
                </div>
            </div>
            
        )
    }
}
