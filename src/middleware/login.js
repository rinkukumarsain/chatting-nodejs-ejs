const joi = require("joi");

exports.login_Validation = (req, res, next) => {
    const schema = joi.object().keys({
        email:joi.string().email({ tlds: { allow: false } }).when('type', { is: "email", then: joi.required(), otherwise: joi.optional() }),
        number:joi.when('type', { is: "number", then: joi.required(), otherwise: joi.optional() }),
        type:joi.string().valid('email','number').required(),
        password:joi.string().required(),
    });
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
        const { details } = error;
        res.status(200).json({ error: details });
    } else {
        next();
    };
};
