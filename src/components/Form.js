import React from "react";
export default class Form extends React.Component {
  state = {
    location: ""
  };
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value
    });
  };
  handleSubmit = event => {
    event.preventDefault()
    alert(`${this.state.location}!`)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Submit a Location
          <input
            type="text"
            name="location"
            value={this.state.location}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
};