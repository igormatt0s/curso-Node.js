const express = require('express')
const router = express.Router()
const ProductController = require('../controllers/ProductController')

router.get('/:id', ProductController.getProduct)
router.get('/edit/:id', ProductController.editProduct)
router.post('/remove/:id', ProductController.removeProduct)
router.get('/', ProductController.showProducts)
router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.createProductPost)

module.exports = router