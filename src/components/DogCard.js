import React from 'react'
import { Link } from 'react-router-dom'

const DogCard = ({ dog }) => (
  <div className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile">
    <Link to={`/dogs/${dog.id}`}>
      <div className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={dog.img} alt={`image of ${dog.name}`} />
          </figure>
        </div>
        <div className="card-content">
          <p className="subtitle">{dog.name}</p>
        </div>
      </div>
    </Link>
  </div>
)

export default DogCard