# Project-2: Fetch

### ![](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive

## Overview
Link to the site on [GitHub Pages](https://charlotte-thomas.github.io/project-fetch/).

The second project tasked to us by General Assembly required us to develop a simple front-end application which incorporated a public API in which to make GET requests from. 

This was a **48 hour - paired-programming hackathon** with [Georg Preuss](https://github.com/georgpreuss).

My partner and I chose to use an API which gave us information about different dog breeds. We took turns to either write the code or direct the person programming.

## Brief

* Consume a public API
* Have several components - At least one classical and one functional
* The app should include a router - with several "pages"
* Be deployed online and accessible to the public

## Technologies Used

> JavaScript (ES6)   
> React.js (using classes)       
> HTML5       
> SCSS   
> TheDogApi  
> Bulma  
> Git  
> GitHub

## Approach

Due to the limited time-frame given to complete this project, we decided to create a very simple site which had a landing-page, list of breeds, single dog page and favourites page.

### Dog Breeds Page

Firstly we made a request to get all the information about each dog breed.

	  componentDidMount() {
    	axios.get('https://api.TheDogAPI.com/v1/breeds')
     	  .then(res => {
        	 this.setState({ dogs: res.data })
           this.fetchImages(res.data)
     	   })
     	  .catch(err => console.log(err))
  	   	}
  	

The API we chose was designed so that you could only GET one images of dog breed at a time, for this reason we had to design a function which looped through a sequence of GET requests in order to get all the dogs breed images.

	fetchImages(dogs) {
	    const allDogs = [...dogs]
	    for (let i = 1; i < 10; i++) {
	      axios.get(`https://api.thedogapi.com/v1/images/search?breed_id=${i}`)
	        .then(res => {
	          allDogs.forEach((dog, index) => {
	            if (dog.id === i) {
	              dogs[index].img = res.data[0].url
	            }
	          })
	          this.setState({ dogs: allDogs })
	        })
	   	   }
	  	  }

As we were unsure of API call limits, we decided to reduce the number of requests to 10 in order to not exceed any that may exist.


![](https://i.imgur.com/k8Wryng.png)


### Single Dog Page

A user can click on any dog from the breeds page to find out more information about that particular breed.

We also implemented a "Like" button which allows the user to save that dog to their favourites list. We did this using local storage.

	addFavs() {
	    localStorage.setItem(this.state.dog[0].breeds[0].id, 
	    [this.state.dog[0].url, this.state.dog[0].breeds[0].name])
	    console.log({ ...localStorage })
  	}
  	
![](https://i.imgur.com/DEOGT0E.png)

### Favourites Page

In order to display a users favourite dogs, we simply got the infomation from local storage and places the dog images and names into separate arrays before rendering them on to the page.

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
	    listImg.push(<img src={img}></img>)
	  })
	  test.forEach((dog) => {
	    if (dog === 'INFO') {
	      return
	    }
	    const name = dog.split(',')[1]
	    listName.push(<p className='subtitle'>{name}</p>)
	  })
	  
![](https://i.imgur.com/Jmn9LHv.png)

## Limitations

One GET request had to be made for each individual dog breed as images were not included with all the other information about the breeds. This made making the breed page quite difficult and the reason for why we limited our api calls for images to 10.

Having too many requests also slowed down the rendering of the site quite significantly.

## Future Features

* A search function to look for dogs by name, breed, etc.
* An improved design
* An 'adopt a dog' feature, possibly using a different API to determine dogs up for adoption in your area

## Lessons Learned

Make sure to choose an API which is easy to utilise for the purposes of the website.
