let player1 = document.querySelector('#p1');
let player2 = document.querySelector('#p2');

let reset = document.querySelector('#reset');

let p1ScoreCount = document.querySelector('#p1score')
let p2ScoreCount = document.querySelector('#p2score')

let count = document.querySelector('#count')
 
let winning_number = 5
let p1score = 0
let p2score = 0

gameOver = false


player1.addEventListener('click', function(){
    if(!gameOver){
        p1score += 1;
        p1ScoreCount.textContent = p1score
        if(p1score == winning_number){
            p1ScoreCount.style.color = "green"
            gameOver = true
        }
    }
       
});

player2.addEventListener("click", function(){
    if(!gameOver){
        p2score += 1;
        p2ScoreCount.textContent = p2score
  
    if(p2score == winning_number){
        p2ScoreCount.style.color = 'green'
        gameOver = true
    }
}
});

reset.addEventListener('click', function(){
    p1score = 0
    p1ScoreCount.textContent = 0
    p1ScoreCount.style.color = 'black'

    p2score = 0
    p2ScoreCount.textContent = 0
    p2ScoreCount.style.color = 'black'

    gameOver = false
    
    winning_number = 5
    document.querySelector("#winning_number").textContent = 5
})

count.addEventListener('input', function(){
    winning_number = this.value
    document.querySelector("#winning_number").textContent = winning_number
})