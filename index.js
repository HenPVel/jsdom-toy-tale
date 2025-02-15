
window.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM fully loaded and parsed');
    let form = document.querySelector(".container")
    form.hidden = false
    form.addEventListener("submit", function(event) {
        event.preventDefault()
        let name =  event.target.name.value
        let image = event.target.image.value
        let toyList = document.querySelector("#toy-collection")
        let toyMake = {name, image, likes: 0 }

        let configToy= {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(toyMake)
        }

        fetch('http://localhost:3000/toys', configToy)
        .then(response => response.json())
        .then(json => json)
        

        toyList.append(createToy(toyMake))
        
    }  )

    fetch('http://localhost:3000/toys')
        .then(getResponse)
        .then(processJSON)
});



// fetch from the server

// process the request and the response
let getResponse = response => response.json()


// process the json
let processJSON = json => {
    console.log(json)
    // call back will make all the toy elements etc.
    createToys(json)
}

// call back will make all the toy elements etc.
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
  let buttonElm = divElm.querySelector(".like-btn")
  buttonElm.addEventListener('click', function(event) {
      divElm.querySelector("p").textContent = `${toyObject.likes+1} Likes`
  })
    
  return divElm

}






// put the json into an array
// pass that array and create a callback to be run on each object


