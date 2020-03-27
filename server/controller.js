let jobs = require('./data.json');
let id = 21;

module.exports = {
    addJob: (req,res)=>{
        // company logo, title, job description, and etc.
        jobs.unshift({id, ...req.body});
        id++;
        res.status(200).send(jobs);
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
    deleteJob: (req,res)=>{
        const {id} = req.params;
        const index = jobs.findIndex(val => val.id === +id);
        jobs.splice(index, 1);
        res.status(200).send(jobs);
    }
}