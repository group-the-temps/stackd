getUserProfile = async (req, res) => {
    const db = req.app.get("db");
    const {user_id} = req.params;
    const getProfile = await db.users.get_user_profile(user_id);
    res.status(200).json(getProfile)
    .catch( () => {
        res.status(500).json({error: "Could not retrieve user profile."})
    })
};

editDisplayName = async (req, res) => {
    const db = req.app.get("db");
    const {display_name} = req.body;
    const {user_id} = req.session.user;

    const displayName = await db.users.edit_user_display_name([display_name, user_id])

        req.session.user.display_name = displayName[0].display_name;
        res.status(200).json(req.session.user)
        .catch( () => {
            res.status(500).json({error: "Could not edit display name."});
        });
};

editBio = async (req, res) => {
    const db = req.app.get("db");
    const {bio} = req.body;
    const {user_id} = req.session.user;

    const biography = await db.users.edit_user_bio(bio, user_id)
        res.status(200).json(biography)
        .catch( () => {
            res.status(500).json({error: "Could not edit biography."});
        });
};

editImg = async (req, res) => {
    const db = req.app.get("db");
    const {img} = req.body;
    const {user_id} = req.session.user;

    const image = await db.users.edit_user_img(img, user_id)
        res.status(200).json(image)
        .catch( () => {
            res.status(500).json({error: "Could not edit image."});
        });
};

module.exports = {
    getUserProfile,
    editDisplayName,
    editBio,
    editImg
}