const bcrypt = require('bcrypt');
const { getRecordSimple, updateRecord } = require('../../DataAccessObject/database_functions');


exports.editUser = async (req, res, next) => {
    const {userId, email, userName, password } = req.body;

    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await getRecordSimple('users', 'userId', userId);

        const payload = {
            email:      email       ? email : user[0].email,
            userName:   userName    ? userName : user[0].userName,
            password:   password    ? hash : user[0].password
        };

        await updateRecord('users', payload, 'userId', userId);
        res.status(200).send('Updated successfuly.');
    } 
    catch (error) {
        res.status(500).send(error);
    }
}