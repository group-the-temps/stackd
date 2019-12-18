// getUserProfile =  (req, res) => {
//     const db = req.app.get("db");
//     const {id} = req.params;
//     const {user_id} = req.session.user;
//     if (user_id !== id) {
//         console.log(id)
//          db.users.get_user_profile(id)
//          .then( (response) => {
//              console.log(response)
//              res.status(200).json(response[0]);
//          })
//     } else {
//         db.users.get_user_profile(user_id)
//         .then( (response) => {
//             console.log(response[0])
//             res.status(200).json(response[0]);
//         })
        
//     }
   
// };
getUserProfile = async (req, res) => {
    const db = req.app.get("db");
    const {id} = req.params;

    const getProfile = await db.users.get_user_profile(id)
    console.log(id);
    res.status(200).json(getProfile);
};

editDisplayName = async (req, res) => {
    const db = req.app.get("db");
    const {display_name} = req.body;
    const {user_id} = req.session.user;

    const displayName = await db.users.edit_user_display_name([display_name, user_id])
        req.session.user.display_name = displayName[0].display_name;
        res.status(200).json(req.session.user);
};

editBio = async (req, res) => {
    const db = req.app.get("db");
    const {bio} = req.body;
    const {user_id} = req.session.user;

    const biography = await db.users.edit_user_bio(bio, user_id)
        res.status(200).json(biography);
};

editCohort = async (req, res) => {
    const db = req.app.get("db");
    const {cohort} = req.body;
    const {user_id} = req.session.user;

    const myCohort = await db.users.edit_user_cohort(cohort, user_id)
        res.status(200).json(myCohort);
};

editImg = async (req, res) => {
    const db = req.app.get("db");
    const {img} = req.body;
    const {user_id} = req.params;

    const image = await db.users.edit_user_img([img, user_id])
        res.status(200).json(image)
        // .catch( () => {
        //     res.status(500).json({error: "Could not edit image."});
        // });
};

getImg = async (req, res) => {
    const db = req.app.get("db");
    const {user_id} = req.params;

    const getImage = await db.users.get_user_image(user_id)
    res.status(200).json(getImage);
}

getAskedQuestions = async (req, res) => {
    const db = req.app.get("db");
    const {user_id} = req.params;

    const askedQuestions = await db.questions.get_profile_questions(user_id)
    res.status(200).json(askedQuestions);
}

module.exports = {
    getUserProfile,
    getImg,
    editDisplayName,
    editBio,
    editImg,
    editCohort,
    getAskedQuestions
}