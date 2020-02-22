import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class SingleDog extends React.Component {
  constructor() {
    super()
    this.state = {
      dog: []
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${id}`)
      .then(resp => this.setState({ dog: resp.data }))
      .catch(err => this.setState({ err: err.response.status }))




  }

  addFavs() {
    localStorage.setItem(this.state.dog[0].breeds[0].id, [this.state.dog[0].url, this.state.dog[0].breeds[0].name])
    console.log({ ...localStorage })
  }

  render() {
    console.log(this.state.dog)
    if (this.state.dog.length === 0) {
      return null
    }
    // console.log(this.state.dog[0].url)
    return <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          <div className="column is-half-tablet">
            <img src={this.state.dog[0].url} />
          </div>
          <div className="column is-half-tablet has-text-centered">
            <p className="title">{this.state.dog[0].breeds[0].name}</p>
            <p className="subtitle">Origin: {this.state.dog[0].breeds[0].origin}</p>
            <p>Weight: {this.state.dog[0].breeds[0].weight.metric}</p>
            <p>Height: {this.state.dog[0].breeds[0].height.metric}</p>
            <p>Bred for: {this.state.dog[0].breeds[0].bred_for}</p>
            <p>Breed group: {this.state.dog[0].breeds[0].breed_group}</p>
            <p>Life span: {this.state.dog[0].breeds[0].life_span}</p>
            <p>Temperament: {this.state.dog[0].breeds[0].temperament}</p>
            <div className="button likeButton" onClick={() => this.addFavs()}>
              Like
            </div>
          </div>
        </div>
      </div>
     
    </div>
  }
}

export default SingleDog