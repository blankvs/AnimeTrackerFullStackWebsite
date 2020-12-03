import React, { Component } from 'react'
import axios from 'axios'


class AnimeList extends Component {
    constructor(){
        super()
        this.state = {
            text: 0,
            dropdownValue: '',
            episodeNumber: '',
             //Do I swap ep num for something other than strings.
        }

        this.onType = this.onType.bind(this)
        // this.onType = this.onType.bind(this)
    }

    onType(e){
        console.log(e)
       this.setState({text: e.target.value})
    }

    handleAddToList(){
        this.props.addToList(this.state.dropdownValue, this.state.text)
    
    }
    //This is linked to select through this.selector and listens for e then returns this func with another e.
    selector(e){
        this.setState({
            dropdownValue: e.target.value
        })
    }


    render() {
        return(
            <div className="LS"> 
                <select onChange={(e) => this.selector (e) }>
                    <option value=""> Select </option>
                    <option value={1}> Naruto </option>
                    <option value={2}> One Piece </option>
                    <option value={3}> My Hero Academia </option>
                    <option value={3}> Akame ga Kill </option>
                    <option value={5}> Mob Psycho 100 </option>
                    <option value={6}> The Vinland Saga </option>
                    <option value={7}> Dr.Stone </option>
                    <option value={8}> Fire Force </option>
                    <option value={9}> Blue Exorcist </option>
                    <option value={10}> Attack On Titan </option>
                </select>
                <input value={this.state.text} type="number" onChange={(e) => this.onType(e)}></input>
                <button onClick={() => this.handleAddToList()}>ADD</button> 

            </div>
        )
    }
}
// const listItem

export default AnimeList