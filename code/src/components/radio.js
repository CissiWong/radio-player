import React from "react"

class Radio extends React.Component {

  render() {
    return (
      <div className="radio-box" style={{ backgroundColor: `#${this.props.color}` }}>
        <div className="radio-image">
          <img src={this.props.image} alt="" />
        </div>
        <div className="audio-wrapper">
          <div className="radio-name">{this.props.name}</div>
          <audio controls src={this.props.audio} type="audio/mpeg" ><track kind="captions" /></audio>
        </div>
      </div>
    )
  }
}

export default Radio
