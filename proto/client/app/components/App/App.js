import React, { Component } from 'react'
import { Loading } from 'components'
import { SearchInput } from 'components'
import { getResults } from 'utils/api'
import './styles.css'

class App extends Component {
  state = {
    url: '',
    isFetching: false,
    results: null,
  }
  handleSubmit = (newURL) => {
    this.updateURL(newURL)
  }
  updateURL = async (newURL) => {
    this.setState(() => ({
      url: newURL,
      isFetching: true,
    }))
    const results = await getResults(newURL)
    this.setState(() => ({ isFetching: false, results }))
  }

  render() {
    const { url } = this.state
    const { isFetching } = this.state
    const { results } = this.state

    return (
      <div className='home-container'>
        <div className='row'>
          <SearchInput
            label={url}
            onSubmit={this.handleSubmit} />
        </div>

        {isFetching
          && <Loading />}

        {results
          && <div>{results}</div>}

      </div>
    )
  }
}

export default App
