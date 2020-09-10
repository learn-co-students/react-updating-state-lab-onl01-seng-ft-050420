// Code YouTubeDebugger Component Here
import React, {Component} from 'react';

class YouTubeDebugger extends Component {
    state = {
        errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
    }
    handleResolution = e => {
        this.setState({
            settings:{
                ...this.state.settings,
                video: {
            ...this.state.settings.video,
            resolution: '720p'
                }}
        })
    }
    handleBitrate = e => {
                this.setState({
                    settings:{
                    ...this.state.settings,
                    bitrate: 12
                    }
                })
    }
    render(){
        return(
            <div>
            <button className="resolution" onClick={this.handleResolution}></button>
            <button className="bitrate" onClick={this.handleBitrate}></button>
            </div>
        )
    }
}
export default YouTubeDebugger