const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

app.post('/upload/profile', (req, res)=>{

    let upload = multer({ storage: storageProfile}).single('image');

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