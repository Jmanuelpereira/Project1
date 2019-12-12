function genSquares(){
    let numValue = 0 ;
    for (i = 0; i < names.length; i++){
        numValue = Math.floor(Math.random() * names.length);
        // allSquares.push(numValue);
        allSquares.push(names[Math.floor(Math.random() * names.length)]);

    }
    // console.log(allSquares)
}


genSquares();


const nuevoGame = new SquareGame(allSquares);



document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    nuevoGame.square.forEach(id => {
      
      html += `<div class="square"  name="${id.name}" score = ${id.score}>`;
      html += `<div class="back ${id.name}" name="${id.name}" score = ${id.score}></div>`;
      html += `<div class="front"></div>`;
      html += `<img src="galaxy.png" alt="${id.name}">`;
      html += `<p class="text">${id.name}</p>`;
      html += `</div>`;
    });

    // Add all the divs to the HTML
  document.querySelector('.gameTable').innerHTML = html;
});


console.log(document.querySelectorAll('.square'))

document.querySelectorAll('.square').forEach( oneSquare => {
    oneSquare.onclick = function() {
      console.log("Function works")
      // oneSquare.classList.add("turned");
      // const valor = oneSquare.attributes[0].value
      console.log(valor)
    }
})

// function flipCard() {

//   for (let i = 0; i < allSquares.length; i++) {
    
//     let square = document.querySelector(`body > div.gameTable > div:nth-child(${i + 1})`)
    
//     square.onClick = function() {
//       console.log("hello")
//     }
//     // console.log(square)
//   }

// }


