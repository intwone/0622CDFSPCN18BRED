import axios from 'axios';
import { Component } from 'react';

export default class MyFirstComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
      chuckNorrisJoke: ''
    }
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement() {
    if(this.state.counter === 0) return

    this.setState({
      counter: this.state.counter - 1
    })
  }

  componentDidMount() {
    this.getChuckNorrisInfo()
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  getChuckNorrisInfo() {
    axios.get('https://api.chucknorris.io/jokes/random')
      .then(response => this.setState({ chuckNorrisJoke: response.data.value }))
  }

  render() {
    return (
      <>
        <div className='container'>
          <button onClick={() => this.increment()}>+</button>
          <h1>{this.state.counter}</h1>
          <button onClick={() => this.decrement()}>-</button>
        </div>

        <div className='container'>
          <h2>Ola!</h2>
          <h2>{this.state.chuckNorrisJoke}</h2>
        </div>
      </>
    )
  }
}


