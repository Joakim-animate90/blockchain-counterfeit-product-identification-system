const client = require('../db/db');

function createAccount(username , password, role){
    client.query('INSERT INTO auth (username, password, role) VALUES ($1, $2, $3)', [username, password, role], (err, res)=>{
        if(err){
            console.log(err.message);
        }else{
            //log response
            console.log('Data insert successful' + res);
        }
    })
}

function changePassword(username, password){
    client.query('UPDATE auth SET password = $1 WHERE username = $2', [password, username], (err, res)=>{
        if(err){
            console.log(err.message);
        }else{
            console.log('Data update successful' + res);
        }
    })
}

module.exports = {
    createAccount,
    changePassword
};
