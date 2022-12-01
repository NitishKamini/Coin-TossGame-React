import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {total: 0, heads: 0, tails: 0}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState(prevState => ({total: prevState.total + 1}))
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {total, heads, tails} = this.state
    console.log(total)
    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="card-heading">Coin Toss Game</h1>
          <p className="card-text">Heads (or) Tails</p>

          {Math.floor(Math.random() * 2) === 0 ? (
            <img
              className="toss-image"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          ) : (
            <img
              className="toss-image"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}

          <button
            type="button"
            className="card-button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="card-count">Total: {total}</p>
            <p className="card-count">Heads: {heads}</p>
            <p className="card-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
