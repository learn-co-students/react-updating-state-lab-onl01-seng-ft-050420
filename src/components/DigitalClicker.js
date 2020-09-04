// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component{

    constructor(){
        super()
        this.state = {timesClicked: 0}
    }

    handleClick = (event) => {
        this.setState( previousState => { return {timesClicked: previousState.timesClicked + 1 }}, console.log(this.state))

    }


    render(){

        return(

            <div>
                <button onClick={this.handleClick} >{this.state.timesClicked}</button>
            </div>

        )
    }


}
