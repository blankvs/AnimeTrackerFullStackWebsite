const anime = require ('../Data')

module.exports = {
    fetchAnime: (req,res) => {
        res.status(200).send(anime)
    }
}

