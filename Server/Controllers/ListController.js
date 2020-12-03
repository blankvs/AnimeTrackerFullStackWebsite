const animeDataList = require("../Data")

const list = []




module.exports = {
fetchAnime: (req,res) => {
    res.status(200).send(animeDataList)
},
addToList: (req,res) => {
    const{anime_id, episode} = req.body
    const anime = animeDataList.find(anime => anime.id == anime_id)
    anime.episode = +episode//forcing a number
    console.log(anime)
    list.push(anime)
    res.status(200).send(list)
},
edit: (req,res) => {
    const {id} = req.params
    const {action} = req.query //requires ? in postman.
    let newEpisode = null
    const numberIndex = list.findIndex(anime => anime.id == id)

    if(action === 'increase'){
        newEpisode = list[numberIndex].episode + 1
    }else if(action === 'decrease'){
        newEpisode = list[numberIndex].episode - 1
    }

    list[numberIndex].episode = newEpisode
    res.status(200).send(list)
},
remove: (req,res) => { //Going to api/list/# to remove.
    const {id} = req.params//Since it removes the existing param from addToList I don't think it requires one.
    const removeIndex = list.findIndex(anime => anime.id == id)
    list.splice(removeIndex, 1)
    res.status(200).send(list)
}
}