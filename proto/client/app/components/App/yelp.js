import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Business from '../Business/Business'
import cities from './cities.json'
import Select from 'react-select'
import './App.css'
import 'react-select/dist/react-select.css'

class App extends Component {
  static propTypes = {
    category: PropTypes.string,
    city: PropTypes.string,
    results: PropTypes.array,
    handleUpdateCategory: PropTypes.func.isRequired,
    handleUpdateCity: PropTypes.func.isRequired,
  }
  state = {
    selectedOption: this.props.city,
  }
  componentWillMount() {
    this.select = cities.map((city) => (
      { 'value': city.city, 'label': city.city + ', ' + city.state }
    ))
  }
  updateCategory = e => {
    if (e.target.checked) {
      this.props.handleUpdateCategory(e.target.value)
    }
  }
  handleChange = (selectedOption) => {
    if (selectedOption.label) {
      this.props.handleUpdateCity(selectedOption.label)
      this.setState({ selectedOption })
    }
  }
  render() {
    const { selectedOption } = this.state
    const value = selectedOption && selectedOption.value
    return (
      <div className="App">
        <header className="App-header">
          <form className="form-inline my-2 my-lg-0">
            <div className="btn-group" data-toggle="buttons" style={{ 'marginRight': '1em' }}>
              <label className="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  value='health'
                  defaultChecked
                  onChange={this.updateCategory} /> Health
              </label>
              <label className="btn btn-secondary">
                <input
                  type="radio"
                  name="options"
                  value='tattoo'
                  onChange={this.updateCategory} /> Tattoo
              </label>
            </div>
            <Select
              id='select'
              name="form-field-name"
              value={value}
              onChange={this.handleChange}
              options={this.select} />
          </form>
          {(this.props.results)
            ? <h1 width='100%' className="App-title" style={{ 'fontSize': '20px' }}>
              Now viewing data for {this.props.category}s in {this.props.city}...</h1>
            : <h1 className="App-title">Morning Savannah</h1>}
        </header>
        <Business results={this.props.results} />
      </div>
    )
  }
}

export default App
