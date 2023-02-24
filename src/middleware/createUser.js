const joi = require("joi");

exports.createUser_Validation = (req, res, next) => {
    const schema = joi.object().keys({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().email({ tlds: { allow: false } }),
        number: joi.number().required(),
        password:joi.string().required(),
        is_Active: joi.optional()
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const { details } = error;
        res.status(200).json({ error: details });
    } else {
        next();
    };
};
