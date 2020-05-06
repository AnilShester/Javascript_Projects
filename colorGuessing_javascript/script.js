let colors = generateRandomColrs(6)

let squares = document.querySelectorAll('.squares')

var pickColor = selectColor()

let colorDisplayText = document.querySelector('#color_display_text')

let message = document.querySelector('#message')

let head = document.querySelector('#head')

let newColors = document.querySelector('#newColors')

let hardLevel = document.querySelector('#hard')
let easYLevel = document.querySelector('#easy')


hardLevel.addEventListener('click', function(){
    hardLevel.classList.add('selected')
    easYLevel.classList.remove('selected')
})

easYLevel.addEventListener('click', function(){
    easYLevel.classList.add('selected')
    hardLevel.classList.remove('selected')
    easy()
})


// new color button
newColors.addEventListener('click', function(){
    colors = generateRandomColrs(6)
    pickColor = selectColor()
    colorDisplayText.textContent = pickColor
    shuffle_color()
    document.querySelector('h1').style.background = 'steelblue'
    message.textContent = '';
    newColors.textContent = "New Colors"
})


for(var i = 0; i<squares.length; i++){
        // adding color to square
        shuffle_color()
        
        // adding click event 
        // if correct color is picked, display correct and change all square to that color
        squares[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor
            if(clickedColor === pickColor){
                message.textContent = "Correct!"       
                changeColor(clickedColor)
                document.querySelector('h1').style.background = clickedColor
                newColors.textContent = 'Play Again?'
            }
            //if the color picked is wrong change the color to the background color
            else{
                this.style.backgroundColor = '#232323'
                message.textContent = 'Try again'
            }
        }

)};

    
function shuffle_color(){
    for(var i = 0; i<squares.length; i++){
        // adding color to square
        squares[i].style.backgroundColor = colors[i]
        colorDisplayText.textContent = pickColor
    }
}


// function to change the color of the all square to the picked color

function changeColor(color){
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

// fucntion to select a random color from the araay

function selectColor(){
   let random_number = Math.floor(Math.random() * colors.length);
   return colors[random_number];
}

// function to generate random colors for the array
function generateRandomColrs(num){
   var arr = []
   for (var i = 0; i<num; i++){
       var r = Math.floor(Math.random() * 256) //generating random red color
       var g = Math.floor(Math.random() * 256) //generating random green color
       var b = Math.floor(Math.random() * 256) // generating random blue color
       result = 'rgb(' + r + ', '+g+', '+ b + ')'
       arr.push(result)
   }
   return arr
}

// //funtion for hard level
// function hard(){
//     colors = generateRandomColrs(6)
//     pickColor = selectColor()
//     colorDisplayText.textContent = pickColor
//     shuffle_color() 
// }

//funtion for easy level
function easy(){
    for(var i = 3; i<6; i++){
        squares[i].style.display = 'none';
    }
    colors = generateRandomColrs(3)
    pickColor = selectColor()
    colorDisplayText.textContent = pickColor
    shuffle_color()     
}