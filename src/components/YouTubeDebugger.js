// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component{

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleClickBitrate = (event) => {
        this.setState(
            previousState => { return {settings: {...previousState.settings, bitrate: 12}}}

        )
    }

    handleClickResolution = (event) => {
        this.setState(
            previousState => { return {settings: {...previousState.settings, video: {resolution: '720p'}}}}
            )
    }
        


    render(){

        return(
            <div>
                <button className='bitrate' onClick={this.handleClickBitrate}>Bitrate</button>
                <button className='resolution' onClick={this.handleClickResolution}>Resolution</button>
            </div>
        )
    }


}