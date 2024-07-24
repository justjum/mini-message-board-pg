var express = require('express');
var router = express.Router();
const controller = require('../controllers/controller')

/* GET home page. */
router.get('/', controller.indexGet);
router.post('/', controller.indexPost);
router.get('/create', controller.createMessageGet);
router.post('/create', controller.createMessagePost);
router.get('/delete/:id', controller.deleteMessageGet);
router.post('/delete/:id', controller.deleteMessagePost);


module.exports = router;
