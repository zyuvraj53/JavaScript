// document.addEventListener('DOMContentLoaded', () => {
// const square = document.querySelectorAll('.grid div')
// const scoreDisplay = document.querySelector('span')
// const StartBtn = document.querySelector('.start')

// const width = 10;
// let currentIndex = 0; // so first element in the grid
// let appleIndex = 0;
// let currentSnake = [2,1,0] // so the dic in our grid being 2 (or the head), and 0 being the end (Tail), with all 1's
//                           // being the body fromn now on
// let direction = 1;
// let score = 0;
// let speed = 0.9;
// let intervalTime = 0;
// let interval = 0;

// // to start and restart the game
// function startGame() {
//   currentSnake.forEach(index => squares[index].classList.remove('snake'));
//   square[appleIndex].classList.remove('apple');
//   clearInterval(inteval);
//   score = 0;
//   //randomApple()
//   scoreDisplay.innerText = score;
//   intervalTime = 1000;
//   currentSnake = [2,1,0];
//   currentIndex = 0;
//   currentSnake.forEach(index => squares[index].classList.add('snake'));
//   interval = setInterval(moveOutcomes, intervalTime);
// }

// // function that dea;s with ALL the outcme of the snake.
// function moveOutcomes() {
//   if (
//     (currentsnake[0] + width >= (width * width) && direction == width) ||
//     (currentSnake[0] % width == width - 1 && direction == 1)||
//     (currentSnake[0] % width == 0 && direction -1) ||
//     (currentSnake[0] - width < 0 && direction == -width)
//     squares[currentSnake[0] + direction].classList.contains('snake')
//   ) {
//     return clearInterval(interval);
//   }

//   const tail = currentSnake.pop()
//   squares[tail].classList.remove('snake')
//   currentSnake.unshift(currentSnake[0] + direction)

//   if(squares[currentSnake[0]].classList.contains('apple')) {
//     squares[currentSnake[0]].classList,remove('apple')
//     squares[tail].classList.add('snake')
//     currentSnake.push(tail)
//     //randomApple()
//     core++;
//     scoreDisplay.textContent = score;
//     clearInterval(interval)
//     intervalTime = intervalTime * speed
//     interval = setInterval(moveOutcomes,intervalTime)
//   }
//   squares[currentSnake[0]].classList.add('snake')

// }
// //deals with snake hitting the boret and snake hittinh self
// //deals with snake geyying apple

// //assign functions to keycodes
// function control(e) {
//   squares[currentIndex].classList.remove('snake'); //we are removing the class of snake from all the squares

//   if(e.keycode == 39){
//     directon = 1;// of we press the reight arrow on our keyboard, the snake will go right one
//   }else if(e.keycode == 38){
//     direction = -width;//if we press the up arrow, the snake will go up ten divisions, apperaing to go up
//   }else if(e.keycode == 37){
//     direction = -1;
//   }else if(e.keycode == 40){
//     direction = +width;
//   }
// }


// document.addEventListener('keyup', control);
// StartBtn.addEventListener('click', startGame);



// })