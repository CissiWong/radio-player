import React from "react"

class Radio extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <img src={this.props.image} alt="" />
      </div>
    )
  }
}

export default Radio
