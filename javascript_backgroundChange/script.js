var button = document.querySelector("button");
let channgeText = document.querySelector('h3')
let bdy = document.querySelector('body')
let bkgpurple = false

button.addEventListener('click', function(){
    if(bkgpurple){
        bdy.style.background = 'White'
        bkgpurple = false
    }
    else{
        bdy.style.background = 'Purple'
        bkgpurple = true
    }

    channgeText.textContent = "You clicked the button"
    channgeText.style.color = "Blue"
    button.style.color = "red"
    button.style.background = 'black'
} )