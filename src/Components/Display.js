import React, { Component } from 'react'
import AnimeList from './AnimeList'
import AnimeGetter from './AnimeGetter'
import axios from 'axios'

class Display extends Component {
    constructor(){
        super()
        this.state = {
            options: [],                         //Name change for "data" now "options".
            animeList: [],                      //Believe I don't need a total.
        }

     //Why and should I do this.
        this.addToList = this.addToList.bind(this)
        this.edit = this.edit.bind(this)
        this.removeFromList = this.removeFromList(this)
    }

    componentDidMount() {
        axios.get('/api/anime').then((res) => {
            this.setState({
                options: res.data, //Word ups this data referring too.?
            })
        })
    }
                            //Need to add the "input"
    addToList(id, episode) {   //Swapped "name" for "id"
        const body = { anime_id: id, episode}
        axios.post('/api/list', body).then((res) => {
            this.setState({
                animeList: res.data,
            })
        })
    }

    removeFromList(id) {
        axios.delete(`/api/list/${id}`).then((res) =>{
            this.setState({
                animeList: res.data,
            })
        })
    }

    edit(id, action) {
        axios.put(`/api/list/${id}?action=${action}`).then((res) => {
            this.setState({
                animeList: res.data,
            })
        })
    }
        //should these be one.?
   

    render() {
        return(
            <div className="display">
                <AnimeList addToList={this.addToList} options={this.state.options} />
                <AnimeGetter 
                // options={this.state.options}
                edit={this.edit}
                removeFromList={this.removeFromList} 
                animeList={this.state.animeList}
                />
            </div>
        )
    }
}

export default Display