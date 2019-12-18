searchTitle = (req, res) => {
    const db = req.app.get('db');
    let { title } = req.query;

    title = '%' + title + '%';
    db.search.search_title(title).then(response => {
        if(response.length === 0) {
            res.status(404).json("No Results Found");
        } else {
            res.status(200).json(response);
        }
    })
}

searchDesc = (req, res) => {
    const db = req.app.get('db');
    let { desc } = req.query;

    desc = '%' + desc + '%';
    db.search.search_desc(desc).then(response => {
        if(response.length === 0) {
            res.status(404).json("No Results Found");
        } else {
            res.status(200).json(response)
        }
    })
}

searchTags = (req, res) => {
    const db = req.app.get('db');
    let { tags } = req.query;

    tags = '%' + tags + '%';
    tags = `{${tags}}`;
    db.search.search_tags(tags).then(response => {
        if(response.length === 0) {
            res.status(404).json(console.log("No Results Found"));
        } else {
            res.status(200).json(response);
        }
    })
}

module.exports = {
    searchTitle,
    searchDesc,
    searchTags
}