import React from 'react'

export default class YoutubeDebugger extends React.Component {
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

  handleBitRate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12 // Weird syntax, memorize this!
      }
    })
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitRate}>Change bitrate to 12</button>
        <button className="resolution" onClick={this.handleResolution}>Change resolution to 720p</button>
      </div>
    )
  }
}
