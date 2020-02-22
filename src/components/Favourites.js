import React from 'react'


function makeImages() {
  const allStorage = { ...localStorage }
  const test = Object.values(allStorage)
  const listImg = []
  const listName = []
  test.forEach((dog) => {
    if (dog === 'INFO') {
      return
    }
    const img = dog.split(',')[0]
    listImg.push(<img className="favImg" src={img}></img>)
  })
  test.forEach((dog) => {
    if (dog === 'INFO') {
      return
    }
    const name = dog.split(',')[1]
    listName.push(<p className='subtitle'>{name}</p>)
  })

  const allDogs = []

  for (let i = 0; i < listImg.length; i++) {
    allDogs.push(<div id='content'>{listImg[i]}{listName[i]}</div>)
  }
  return allDogs
}

const FavouriteDogs = () => (
  <figure>
    {makeImages()}
  </figure>
)



export default FavouriteDogs