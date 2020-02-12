# Project-2: Fetch

## Overview
Link to the site on [GitHub Pages](https://charlotte-thomas.github.io/project-fetch/)

The second project tasked to us by General Assembly required us to develop a simple front-end application which incorporated a public API in which to make GET requests from. 

This was a **48 hour - paired-programming hackathon** with [Georg Preuss](https://github.com/georgpreuss)

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

###Dog Breeds Page

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


###Single Dog Page

A user can click on any dog from the breeds page to find out more information about that particular breed.

We also implemented a "Like" button which allows the user to save that dog to their favourites list. We did this using local storage.

	addFavs() {
	    localStorage.setItem(this.state.dog[0].breeds[0].id, 
	    [this.state.dog[0].url, this.state.dog[0].breeds[0].name])
	    console.log({ ...localStorage })
  	}
  	





