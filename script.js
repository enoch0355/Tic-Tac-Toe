let gameTable = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
];


let isGameOver = false;

function checkWin(){
  const winCombos = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  for(const combo of winCombos){
    let a = gameTable[combo[0] - 1]
    let b = gameTable[combo[1] - 1]
    let c = gameTable[combo[2] - 1]
    
    if(a === b && b === c){
      alert('You have won the game');
      isGameOver = true;
      return;
    }
  }
}

function display(){
  let clicked = 'O';
  let squares = document.querySelectorAll('.square');
  squares.forEach((square, index) =>{
      square.addEventListener('click', () =>{
        if(isGameOver === true){
          return;
        }
        if(square.textContent === 'X' || square.textContent === 'O'){
          return;
        }
        
        square.textContent = clicked;
        
        gameTable[index] = clicked;
        setTimeout(() => {
          checkWin();
        }, 10)
        
        
        clicked = (clicked === 'O') ? 'X' : 'O';
      });
  });
}

display();

document.getElementById('retry').addEventListener('click', () =>{
  gameTable = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  isGameOver = false;
  clicked = 'O';
  let squares = document.querySelectorAll('.square');
  squares.forEach(square => square.textContent = '');
})
