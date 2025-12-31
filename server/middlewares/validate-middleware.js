const validate = (Schema) => async (req, res, next) => {
    try {
        const parseBody = await Schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (err) {
        // const message = err.error.message;
        console.log(err.errors);
        return res.status(400).json({ errors: err.errors });
    }
}


module.exports = validate;