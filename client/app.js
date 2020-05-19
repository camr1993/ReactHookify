/* eslint-disable react/no-unused-state */
import React, { Component } from 'react'
export default class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  otherGenericMethod2 = async () => {
    const excitingVariable = 23
    this.setState({
      firstName: 'catmeow',
    })
  }

  genericMethod = () => {
    const dullVariable = 24
    this.setState({
      lastName: 'wowow',
    })
  }

  render() {
    const x = this.state.firstName
    return (
      <div className="simple">
        <div>hi</div>
        <button
          type="button"
          onClick={async function () {
            await this.setState({
              count: this.state.count + 1,
              name: this.state.name,
            })
          }}
        >
          Click me
        </button>
        <button
          type="button"
          onClick={() =>
            this.setState({
              count: this.state.count + 2,
              name: this.state.name,
            })
          }
        >
          Click Me
        </button>
        <button
          type="button"
          onClick={() =>
            this.setState({
              count: this.state.count + 3,
              name: this.state.name,
            })
          }
        >
          Click Me
        </button>
        <button
          type="button"
          onClick={() =>
            this.setState({
              count: this.state.count + 4,
              name: this.state.name,
            })
          }
        >
          Click Me
        </button>
      </div>
    )
  }
}
