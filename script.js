const allSquares = [];

const names = [
  {
    name: "alien",
    score: -10
   },
   {
     name: "spaceship",
     score: 5
   },
   {
     name: "stars",
     score: 3
    },
    {
      name: 'planets',
      score: 1
    } 

  ]

function genSquares(){
    let numValue = 0 ;
    for (i = 0; i < 36; i++){
        numValue = Math.floor(Math.random() * 36);
        // allSquares.push(numValue);
        allSquares.push(names[Math.floor(Math.random() * names.length)]);

    }
    console.log(allSquares)
}


genSquares();


const nuevoGame = new SquareGame(allSquares);



document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    nuevoGame.square.forEach(id => {
      console.log(id)
      html += `<div class="square"  name="${id.name}" score = ${id.score}>`;
      html += `<div class="back ${id.name}" name="${id.name}" score = ${id.score}></div>`;
      html += `<div class="front"></div>`;
      html += `</div>`;
    });

    // Add all the divs to the HTML
  document.querySelector('.gameTable').innerHTML = html;
});


// Bind the click event of each element to a function
// document.querySelectorAll('.square').forEach( oneSquare => {
//     oneSquare.onclick = function() {
//       console.log("Function works")
//       oneSquare.classList.add("turned");
//       const valor = oneSquare.attributes[0].value
//       console.log(valor)
//     }
// })

function flipCard() {

  for (let i = 0; i < allSquares.length; i++) {
    
    let square = document.querySelector(`body > div.gameTable > div:nth-child(${i + 1})`)
    
    square.onClick = function() {
      console.log(square)
    }
    // console.log(square)
  }

}


