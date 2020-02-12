import React from 'react'
import axios from 'axios'
import DogCard from './DogCard'

class Dogs extends React.Component {

  constructor() {
    super()
    this.state = {
      dogs: []
    }
  }

  fetchImages(dogs) {
    const allDogs = [...dogs]
    for (let i = 1; i < 10; i++) {
    // for (let i = 1; i < allDogs.length; i++) {
      axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${i}`)
        .then(res => {
          allDogs.forEach((dog, index) => {
            // could do index loop just to 20 dogs rather than loop through all
            if (dog.id === i) {
              dogs[index].img = res.data[0].url
            }
          })
          this.setState({ dogs: allDogs })
        })
    }
  }

  componentDidMount() {
    axios.get('https://api.TheDogAPI.com/v1/breeds')
      .then(res => {
        this.setState({ dogs: res.data })
        this.fetchImages(res.data)
      })
      .catch(err => console.log(err))
  }

  render() {
    if (!this.state.dogs) {
      return <h2>loading...</h2>
    }
    return <div className="section">
      <div className="container">
        <div className="columns is-mobile is-multiline">
          {this.state.dogs.map((dog, i) => {
            return <DogCard key={i} dog={dog} />
          })}
        </div>
      </div>
    </div>
  }
}

export default Dogs