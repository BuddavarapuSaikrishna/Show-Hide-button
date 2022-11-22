// Write your code here

import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {FirstName: false, LastName: false}

  OnShowFirstName = () => {
    this.setState(prev => ({FirstName: !prev.FirstName}))
  }

  OnShowLastName = () => {
    this.setState(prev => ({LastName: !prev.LastName}))
  }

  render() {
    const {FirstName, LastName} = this.state

    return (
      <div className="Main-Container">
        <h1 className="heading">Show/Hide</h1>
        <div className="Buttons-Container">
          <div>
            <button
              className="ShowFirstName"
              type="button"
              onClick={this.OnShowFirstName}
            >
              Show/Hide Firstname
            </button>
            {FirstName && <p className="name">Joe</p>}
          </div>

          <div>
            <button
              className="ShowLastName"
              type="button"
              onClick={this.OnShowLastName}
            >
              Show/Hide Lastname
            </button>
            {LastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
