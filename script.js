const allSquares = [];

function genSquares(){
    let numValue = 0 ;
    for (i = 0; i < 24; i++){
        numValue = Math.floor(Math.random() * 24);
        allSquares.push(numValue);
    }
}

genSquares();


const SquareGame = new SquareGame(allSquares);

document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    SquareGame.squares.forEach(piece => {
      html += `<div class="card" data-card-name="${piece}">`;
      html += `<div class="back" name="${piece}"></div>`;
      html += `<div class="front" style="background: url(img/${piece.img}) no-repeat"></div>`;
      html += `</div>`;
    });

    // Add all the divs to the HTML
  document.querySelector('#square').innerHTML = html;

