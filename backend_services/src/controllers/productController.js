const client = require('../db/db');

const storageProduct = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads/product'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

const storageProfile = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads/profile'),
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

function addProduct(serialNumber, name , brand){
    client.query('INSERT INTO product (serialNumber, name, brand) VALUES ($1, $2, $3)', 
        [serialNumber, name, brand], (err, res)=>{
            if(err){
                console.log(err.message);
            }else{
                console.log('Data insert successful');
            }
        })

}


module.exports = {
    storageProduct,
    storageProfile,
    addProduct
}