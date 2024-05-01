const express = require('express');
const app = express.Router();
const authController = require('../controllers/authController');

app.get('/authAll', async (req, res)=>{
    const data =  await client.query('Select * from auth');
    res.header('Access-Control-Allow-Credentials', true);
    res.send(data.rows);
    console.log("Data sent successfully");
});

app.post('/auth/:username/:password', async (req, res)=>{
    const {username, password} = req.params;
    const data =  await client.query(`SELECT * FROM auth WHERE username = '${username}' AND password = '${password}'`);
    res.send(data.rows);
    console.log("Data sent successfully");
});

app.post('/addaccount', (req, res)=>{
    const {username, password, role} = req.body;
    authController.createAccount(username, password, role);
    res.send('Data inserted');

});

app.post('/changepsw', (req, res)=>{
    const {username, password} = req.body;
    authController.changePassword(username, password);
    res.send('Data updated');
});