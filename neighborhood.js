let randBtn = document.querySelector('button')
let restaurant = document.querySelectorAll('.food')
let randRest = Math.floor(Math.random() * restaurant.length)


function randomize()    {

    console.log(restaurant[randRest])
    clearInterval()
}

randBtn.addEventListener('click', randomize);