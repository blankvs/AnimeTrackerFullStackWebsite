import React, { Component } from 'react'
import AnimeList from './AnimeList'
import AnimeGetter from './AnimeGetter'

class Display extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            animeList: { total: 0, items: []},
        }
    }

    componentDidMount() {}

    addToList(name, input) {}

    removeFromList(id) {}

    increment(id) {}

    decrement(id) {}

    render() {
        return(
            <div className="display">
                <AnimeList />
                <AnimeGetter />
            </div>
        )
    }
}

export default Display