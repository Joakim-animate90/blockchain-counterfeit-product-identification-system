const express = require('express');
const app = express.Router();
const productController = require('../controllers/productController');

app.post('/upload/product', (req, res)=>{

    let upload = multer({ storage: productController.storageProduct}).single('image');

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

app.get('/file/profile/:fileName', function (req, res) {
    const {fileName} = req.params;
    const filePath = path.join(__dirname, 'public/uploads/profile', fileName);
    res.sendFile(filePath);
});

app.get('/file/product/:fileName', function (req, res) {
    const {fileName} = req.params;
    const filePath = path.join(__dirname, 'public/uploads/product', fileName);
    res.sendFile(filePath);
});


app.get('/product/serialNumber', async (req, res)=>{
    const data =  await client.query(`SELECT serialNumber FROM product`);
    res.send(data.rows);
});

app.post('/addproduct', (req, res)=>{
    const {serialNumber, name, brand} = req.body;
    productController.addProduct(serialNumber, name, brand);
    res.send('Data inserted');

});