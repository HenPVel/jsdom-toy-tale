// fetch from the server

let getResponse = response => response.json()

let processJSON = json => {
    console.log(json)
    createToys(json)
}

let createToys = arrayOfToys => {
    let toyCollectionDiv = document.querySelector('#toy-collection')
    for(let i=0; i < arrayOfToys.length; i++) {
        let newToy = createToy(arrayOfToys[i])
        toyCollectionDiv.append(newToy)
    }
}

function createToy(toyObject){
  let divElm = document.createElement('div.card')
  divElm.innerHTML = `<h2>${toyObject.name}</h2>
  <img src=${toyObject.image} class="toy-avatar" />
  <p>${toyObject.likes} Likes</p>
  <button class="like-btn">Like <3</button>`
  divElm.setAttribute('data-id' , toyObject.id )
  
  return divElm

}


   
fetch('http://localhost:3000/toys')
.then(getResponse)
.then(processJSON)
// process the request and the response
// process the json
// put the json into an array
// pass that array and create a callback to be run on each object
// call back will make all the toy elements etc.

