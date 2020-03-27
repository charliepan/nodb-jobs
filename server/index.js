const express = require('express');
const app = express();
const PORT = 3030;
const con = require('./controller');

app.use(express.json());

app.get('/api/jobs', con.getJobs);
app.post('/api/jobs', con.addJob);
app.put('/api/jobs/:id',con.editJob);
app.delete('/api/jobs/:id',con.deleteJob);

app.listen(PORT, ()=> console.log(`Server be running on port: ${PORT}`));