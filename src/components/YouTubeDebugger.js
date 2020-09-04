// Code YouTubeDebugger Component Here
import React from 'react' 

export default class YouTubeDebbuger extends React.Component {
    constructor() {
        super();
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

    handleBitRateChange = () => {
        console.log("Bitrate:", this.state.settings.bitrate)
        this.setState({
            settings: Object.assign( {}, this.state.settings, {bitrate: 12 })
        })
    }

    handleResolutionChange = () => {
        this.setState({
            settings:  Object.assign( {}, this.state.settings, {video: {resolution: '720p'}})
        })
    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.handleBitRateChange}>Change Bitrate</button>
                <p>Bitrate: {this.state.settings.bitrate}</p>
                <button className="resolution" onClick={this.handleResolutionChange}>Change Resolution</button>
                <p>Resolution: {this.state.settings.video.resolution}</p>
            </div>
        )
    }
}

