const express=require('express')

const router=express.Router()
const productcontroller=require('../controllers/ProductController')
const upload=require('../utils/multer')
const isAuth = require('../middlewares/IsAuth')

router.post('/',isAuth(),upload("products").single("file"),productcontroller.addproduct)
router.get('/',productcontroller.getproducts)
// query =>
router.get("/filterproduct",productcontroller.getproductbycategory)
router.patch('/:id',isAuth(),upload("products").single("file"),productcontroller.updateproduct)
router.delete('/:id',isAuth(),productcontroller.deleteproduct)

module.exports=router