import React from "react"

class Radio extends React.Component {

  render() {
    return (
      <div style={{ backgroundColor: `#${this.props.color}` }}>
        <div>{this.props.name}</div>
        <img src={this.props.image} alt="" />
        <audio controls src={this.props.audio} type="audio/mpeg" ><track kind="captions" /></audio>
      </div>
    )
  }
}

export default Radio
