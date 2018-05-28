import React, { Component } from 'react'



class SearchBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
    // bind functions
    // i.e. this component has a function called onInputChange
    // take that function, bind it to this current component
    // now we have a new function the context of which is this component, not a mystery component
    // take this new function, assign it to the value this.onInputChange (which btw was the old function)
    // so we completely redefine the old onInputChange with the new onInputChange which is bound to this current component
    // all done using the old function itself, and its bind method!
    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange(event) {
    // event is the object passed on by the onChange handler
    // this is a DOM, JS, web dev thing, not React specific
    // what we want is in event.target.value
    // IMPORTANT CALLBACK CONCEPT
    // If we pass the function to onChange like this.onInputChange, and the function
    // refers to this.xx in its code, it's not gonna have the right context.
    // The this is supposed to refer to the current component, but if we pass it off like that
    // it's not gonna refer to anything, it'll have a mystery context
    // Therefore, we need to pass
    this.setState({ term: event.target.value })
  }

  onFormSubmit() {
    // don't submit form, bc html form default is to submit
    event.preventDefault()
    // we need to go and fetch weather data

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a 5 day forecast of your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    )

  }

}

export default SearchBar
