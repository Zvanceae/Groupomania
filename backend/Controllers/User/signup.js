const bcrypt = require('bcrypt');
const { insertRecord } = require('../../DataAccessObject/database_functions');


exports.signup = async (req, res, next) => {
    const {email, password, userName} = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        await insertRecord('users', {email, password: hash, userName});
        return res.status(201).send('User created!');
    } 
    
    //Error handler 
    catch (error) {
        if (error.code === 'ER_DUP_ENTRY')
            return res.status(500).send('Please chose another email.');
        else 
            return res.status(500).send(error);
    }
}