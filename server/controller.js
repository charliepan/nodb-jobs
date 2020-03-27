let jobs = require('./data.json');
let id = 21;

module.exports = {
    addJob: (req,res)=>{
        // company logo, title, job description, and etc.
        jobs.unshift({id, ...req.body});
        id++;
        res.status(200).send(jobs);
    },
    getFilter: (req,res)=>{
        const terms = req.query['filter'].toLowerCase();
        const filtered = jobs.filter((val)=> {
            if(val.job_title.toLowerCase().includes(terms) || val.company.toLowerCase().includes(terms) || val.job_desc.toLowerCase().includes(terms)){
                return true;
            }
            else{
                return false;
            }
        })
        res.status(200).send(filtered);
    },
    getJobs: (req,res)=>{
        res.status(200).send(jobs);
    },
    editJob: (req,res)=>{
        const {id} = req.params;
        const index = jobs.findIndex(val => val.id === +id);
        jobs[index] = {id, ...req.body};
        res.status(200).send(jobs);
    },
    addApplicant:(req,res)=>{
        const {id} = req.params;
        const index = jobs.findIndex(val => val.id === +id);
        const applied =jobs[index].applied;
        if(+applied === 0){
            jobs[index].applicants++;
            jobs[index].applied++;
        }
        res.status(200).send(jobs);
    },
    deleteJob: (req,res)=>{
        const {id} = req.params;
        const index = jobs.findIndex(val => val.id === +id);
        jobs.splice(index, 1);
        res.status(200).send(jobs);
    }
}