var jwt = require('jsonwebtoken');
exports.generateToken = (id) => {
    console.log("secrete key in generate token", process.env.SECRET_KEY);
    const genToken = jwt.sign({ id }, process.env.SECRET_KEY, { expiresIn: '365d' });
    return genToken;
}
exports.verifyToken = (req, res, next) => {
    console.log("Entered to verify token");

    jwt.verify(req.params.token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
            console.log("Error in Verify token", err);
            res.status(422).send('token verification failed')
        } else {
            console.log("decoded result", data);
            req.decoded = {
                'decoded': data.id
            }
            console.log("req.decoded in verify token", req.decoded);

            next();
        }
    });
}