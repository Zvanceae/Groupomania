const { insertRecord } = require("../../DataAccessObject/database_functions");

exports.createPost = async (req, res, next) => {
    const {title, content, userId } = req.body;
        
    try {
            await insertRecord ( 'posts', {title, content, userId}) ;
            return res.status(201).send('Post created!');  

        } catch (error) {
            return res.status(500).send (error)
        }
};