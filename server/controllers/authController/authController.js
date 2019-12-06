const bcrypt = require("bcryptjs");

const login = async(req, res) => {
    const {email, password} = req.body;
    const db = req.app.get("db");

    const checkUser = await db.auth.get_user([email])
    if (checkUser.length === 0) {
        res.status(401).json("Wrong email or password!");
    };

    const existingUser = await bcrypt.compare(password, checkUser[0].password)
    if (existingUser) {
        req.session.user = {
            user_id: checkUser[0].user_id,
            email: checkUser[0].email
        };
        return res.status(200).json(req.session.user);
    } else {
        return res.status(401).json("Wrong email or password");
    };
};
 


module.exports = {
    login
}