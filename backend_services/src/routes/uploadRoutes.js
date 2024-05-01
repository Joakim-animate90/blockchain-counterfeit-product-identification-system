const express = require('express');
const app = express.Router();
const profileController = require('../controllers/profileController');

app.post('/upload/profile', (req, res)=>{

    let upload = multer({ storage: profileController.storageProfile}).single('image');

    upload(req, res, (err)=>{
        if(!req.file){
            return res.send('Please select an image to upload')
        }else if (err instanceof multer.MulterError){
            return res.send(err);
        } else if (err) {
            return res.send(err);
        }
    })
})