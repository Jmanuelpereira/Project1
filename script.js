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


const nuevoGame = new spaceGame(allSquares);



document.addEventListener("DOMContentLoaded", function(event) { 
    let html = '';
    nuevoGame.square.forEach((id, i) => {
      
      html += `<div class="square"  name="${id.name}" price = ${id.price} index = "${i}">`;
      html += `<div class="back ${id.name}" name="${id.name}" price = ${id.price}></div>`;
      html += `<div class="front"></div>`;
      html += `<img src="galaxy.png" alt="${id.name}">`;
      html += `<p class="text">${id.name}</p>`;
      html += `</div>`;
    });

    // Add all the divs to the HTML
  document.querySelector('.gameTable').innerHTML = html;

  console.log(document.querySelectorAll("body > div.gameTable > div.square"))
  document.querySelectorAll('.square').forEach( oneSquare => {
      oneSquare.onclick = function() {


        
        
          let selectedGalaxy;
          let index = oneSquare.attributes[3].value;

          
          for(i = 0; i > allSquares.length ; i++){
            console.log(allSquares[10])
            
            if(index == allSquares[i])
            selectedGalaxy = allSquares[i].name;


          }

          console.log(selectedGalaxy)

          

          // oneSquare.classList.add("turned");
        // const valor = oneSquare.attributes[0].value
        // console.log(valor)
      }
  })    





  

}); // End Domcontent

