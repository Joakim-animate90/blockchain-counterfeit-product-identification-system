const client = require('../db/db');

function createProfile(username, name , description, website, location, image, role){
    client.query('INSERT INTO profile (username, name, description, website, location, image, role) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
        [username, name, description, website, location, image, role], (err, res)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log('Data insert successful');
            }
        })

}

module.exports = {
    createProfile
}