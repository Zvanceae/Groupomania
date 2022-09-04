const express = require('express');
const router = express.Router();

const auth = require('../Middleware/jwt.js');
const multer = require('../Middleware/multer-config.js');

const createPost = require('../Controllers/Posts/createPost.js').createPost;
const addPostImg = require('../Controllers/Posts/addPostImg.js').addPostImg;

router.post('/createPost', auth, createPost);
router.post('/addPostImg', auth, multer ,addPostImg);





module.exports = router;

