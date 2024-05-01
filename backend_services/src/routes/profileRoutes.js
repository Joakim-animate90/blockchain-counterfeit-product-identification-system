const express = require('express');
const app = express.Router();
const profileController = require('../controllers/profileController');

app.get('/profileAll', async (req, res)=>{
    const data =  await client.query('Select * from profile');
    res.header('Access-Control-Allow-Credentials', true);
    res.send(data.rows);
    console.log("Data sent successfully");
});

app.get('/profile/:username', async (req, res)=>{
    const {username} = req.params;
    const data =  await client.query(`SELECT * FROM profile WHERE username = '${username}'`);
    res.send(data.rows);
    console.log("Data sent successfully");
});

app.post('/addprofile', (req, res)=>{
    const {username, name, description, website, location, image, role} = req.body;
    //createProfile(username, name, description, website, location, image, role);
    profileController.createProfile(username, name, description, website, location, image, role);
    res.send('Data inserted');

});