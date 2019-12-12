const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const db = req.app.get('db');
    const { email, password, display_name, is_admin, student_invite_code, admin_invite_code, img } = req.body;
    const { STUDENT_INVITE_CODE, ADMIN_INVITE_CODE } = process.env;

    const checkUser = await db.auth.get_user([email]);
    if (checkUser.length === 0 && STUDENT_INVITE_CODE === student_invite_code) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = await db.auth.register_student_user([email, hashedPassword, display_name, img]);
        req.session.user = {
            user_id: user[0].user_id,
            email,
            display_name,
            img,
            is_admin
        }
        res.status(200).json(user)
    } else if(checkUser.length === 0 && ADMIN_INVITE_CODE === admin_invite_code) {
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);
        const user = await db.auth.register_admin_user([email, hashedPassword, display_name, img]);
        req.session.user = {
            user_id: user[0].user_id,
            email,
            display_name,
            img,
            is_admin
        }
        res.status(200).json(user)
    } else {
        res.status(400).json({error: 'Email already taken or wrong invite code'})
    }
}

const login = async (req, res) => {
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
            email: checkUser[0].email,
            display_name: checkUser[0].display_name,
            bio: checkUser[0].bio,
            cohort: checkUser[0].cohort,
            is_admin: checkUser[0].is_admin
        };
        return res.status(200).json(req.session.user);
    } else {
        return res.status(401).json("Wrong email or password");
    };
};

const logout = (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
}

module.exports = {
    login,
    register,
    logout
}