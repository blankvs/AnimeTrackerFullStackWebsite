import React, { Component } from 'react'
import axios from 'axios'
import AnimeList from './AnimeList'


function AnimeGetter(props) {
    const listMap = props.animeList.map((element) => {
        return (
            <div>
                <h2>{element.name}</h2>
                <p>episode: {element.episode}</p>
                {/* <p>{props.list.name}</p> */}
                <button onClick={() => props.edit(element.id, 'decrease')}> - </button>
                <button onClick={() => props.edit(element.id, 'increase')}> + </button>
                <button onClick={() => props.removeFromList(props.list)}> REMOVE </button>
            </div>
        )
    })
    return(
        <div className="list-container"> 
            {listMap}
        </div>
    )
}

export default AnimeGetter