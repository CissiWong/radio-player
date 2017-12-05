import React from "react"

class Radio extends React.Component {

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <img src={this.props.image} alt="" />
        <div>{this.props.color}</div>
        <audio controls src={this.props.audio} type="audio/mpeg" ><track kind="captions" /></audio>
      </div>
    )
  }
}

export default Radio
