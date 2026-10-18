const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller');

router.get('/', pageController.getDaftar);        
router.get('/menu/:id', pageController.getDetail); 

module.exports = router;