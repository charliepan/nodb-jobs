import React from 'react'
import './css/JobPost.css'

const JobPost = ({id, job_title, company, logo, job_desc, rating, applicants, toggleAorE, deletePost, applyJob, toggle}) => {

    return (
        <section className="post-container">
            <div className={!toggleAorE ? 'job-post' : 'job-post blur'}>
                    <div>
                        <img className='logo' src={logo} alt="company logo"/>
                    </div>
                <div className='heading'>
                    <h3 className='title'>{job_title} @{company}</h3>
                    <span className='rating'>Rating: {rating}/100</span>
                </div>
                <div className='desc'>
                    <content>{job_desc}</content>
                    <p>Applicants: {applicants}</p>
                </div>
                <div className='buttons'>
                    <button onClick={()=>applyJob(id)}>Apply</button>
                    <button onClick={()=>toggle(id)}>Edit</button>
                    <button onClick={()=>deletePost(id)}>Delete</button>
                </div>
            </div>
        </section>
        
    )
}

export default JobPost;