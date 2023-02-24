
const { createUser } = require('../services');

exports.createUser = async (req, res) => {
    try {
        const check = await createUser.create(req);
        res.status(200).json(check);
    } catch (error) {
        console.log(error);
        throw error
    };
};