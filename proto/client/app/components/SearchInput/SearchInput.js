import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './styles.css'

class SearchInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  handleChange = (event) => {
    const value = event.target.value
    this.setState(() => ({ label: value }))
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.label)
  }
  render() {
    const { label } = this.props

    return (
      <div className='container-fluid'>

        <form className='form-inline' onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <input
              id='SearchInput'
              placeholder='Enter website e.g. http://www.google.com/'
              type='text'
              autoComplete='off'
              maxLength='100'
              onChange={this.handleChange} />
            <button
              className='button'
              type='submit'
              disabled={null}>
              Search
            </button>
          </div>
        </form>

        {label
          && <label className='label' htmlFor='keyword'>Displaying HTML for "{label}"</label>}
      </div>
    )
  }
}

export default SearchInput
