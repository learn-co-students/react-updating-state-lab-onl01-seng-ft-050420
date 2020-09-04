import React from 'react'

class YouTubeDebugger extends React.Component {

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

    clickBitrate = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }  

    clickResolution = (e) => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {resolution: '720p'}
            }
        })
    }

    render() {
        return (
        <div>
            <button className="bitrate" onClick={this.clickBitrate}>Bitrate</button>
            <button className="resolution" onClick={this.clickResolution}>Resolution</button>
        </div>
        )
    }
}

export default YouTubeDebugger;
