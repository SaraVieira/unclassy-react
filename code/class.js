import React, { Component } from 'react-apollo'

class Home extends Component {
  state = {
    data: [],
    prop: this.props.value
  }

  componentDidMount() {
    this.getData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.setState({
        prop: this.props.value
      })
    }
  }

  render() {
    return data.map(d => <li>{d.name}</li>)
  }
}
