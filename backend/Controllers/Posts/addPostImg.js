const { updateRecord, getRecordSimple } = require("../../DataAccessObject/database_functions");


exports.addPostImg = async (req, res, next) => {
    
    const file = req.file ?
    req.protocol + '://' + req.get('host') + '/' + req.file.path
    : null;

    try {
        const user = getRecordSimple('posts', 'postId')
            await updateRecord('posts', {imgLink:file}, 'postId',req.body.postId)

            return res.status(201).send('Image added!');  

        } catch (error) {
            console.log(error);
            return res.status(500).send (error)
        }
};