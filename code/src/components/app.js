import React from "react"
import Radio from "./radio"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      radioChannel: []
    }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({ radioChannel: json.channels })
    })
  }

  render() {
    return (
      <div>
        {this.state.radioChannel.map((item) => {
          return <Radio
            name={item.name}
            image={item.image} />
        })}

      </div>
    )
  }
}

export default App
