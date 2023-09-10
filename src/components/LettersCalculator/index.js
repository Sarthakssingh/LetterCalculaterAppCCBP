// Write your code here.

import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
    searchInput: '',
  }

  countChange = event => {
    this.setState({
      count: event.target.value.length,
      searchInput: event.target.value,
    })
  }

  reset = () => {
    this.setState({
      count: 0,
      searchInput: '',
    })
  }

  render() {
    const {count, searchInput} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <label className="label" htmlFor="inp">
            Enter the pharase
          </label>
          <input
            type="input"
            className="input"
            id="inp"
            value={searchInput}
            onChange={this.countChange}
          />
          <button type="button" className="result" onClick={this.reset}>
            No. of letters:{count}
          </button>
        </div>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
