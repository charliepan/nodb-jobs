import React from 'react'
import './css/JobPost.css'

const JobPost = ({job_title, company, logo, job_desc, rating, applicants, id, toggleAorE, deletePost}) => {
    return (
        <content>
            <div className={!toggleAorE ? 'job-post' : 'blur'}>
                <img src={logo} alt="company logo"/>
                <h3>{job_title} @{company}</h3>
                <span>{rating}</span>
                <p>{job_desc}</p>
                <p>{applicants}</p>
                <button>Apply</button>
                <button>Edit</button>
                <button onClick={()=>deletePost(id)}>Delete</button>
            </div>
        </content>
        
    )
}

export default JobPost;