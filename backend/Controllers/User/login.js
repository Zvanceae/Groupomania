const { getRecordSimple } = require("../../DataAccessObject/database_functions");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


exports.login = async (req, res, next) => {
    const {email, password} = req.body;

    try {
        // Get user by email
        const user = await getRecordSimple('users', 'email', email);
        const match = await bcrypt.compare(password, user[0].password);

        if (match) {
            const token = jwt.sign(
                { userId: user[0].userId },
                'TOKEN_SECRET',
                { expiresIn: '24h' });  
                console.log(token);

            res.status(200).send({
                userId:     user[0].userId,
                email:      user[0].email,  
                userName:   user[0].userName,
                token
            });
        }
        else {
            res.status(404).send('Incorrect credentials');
        }
    }

    // Catch errors 
    catch (error) {
        if (error === 'No user found')
            return res.status(404).send('Incorrect credentials');
        else 
            return res.send(error);
    }
};