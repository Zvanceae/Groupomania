const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
// Use cors and body parser
app.use(cors());
app.use(express.json());

// Set static file for img download

app.use('/images', express.static(path.join(__dirname, 'images')));

// Import routers
const userRouter = require('./Routers/userRouter.js');
const postRouter = require('./Routers/postRouter.js');



app.use('/api', userRouter);
app.use('/api', postRouter);


module.exports = app;