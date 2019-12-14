function genSquares(){
    let numValue = 0 ;
    for (i = 0; i < names.length; i++){
        numValue = Math.floor(Math.random() * names.length);
        // allSquares.push(numValue);
        allSquares.push(names[Math.floor(Math.random() * names.length)]);

    }
    // console.log(allSquares)
}

//creating galaxys
genSquares();

const nuevoGame = new spaceGame(allSquares);

document.addEventListener("DOMContentLoaded", function(event) { 

  //creating timer

document.querySelector('.start').onclick = function() {

  let timer = 300

  setInterval(function(){
    timer--
    console.log(timer)
    document.querySelector(".timer").innerHTML = timer;
    if (timer === 0) {
      return "Game Over"
    }
  }, 1000)

}

//end timer function


//creating galaxys in html
    let html = '';
    nuevoGame.square.forEach((id, i) => {
      
      html += `<div class="square galaxy"  name="${id.name}" price = ${id.price} index = "${i}">`;
      html += `<div class="back ${id.name}" name="${id.name}" price = ${id.price}></div>`;
      html += `<div class="front"></div>`;
      html += `<img src="galaxy.png" alt="${id.name}">`;
      html += `<p class="text">${id.name}</p>`;
      html += `</div>`;
    });

    // Add all the divs to the HTML for first level
  document.querySelector('.first-level').innerHTML = html;


  //global variables

  let firstLevel = true;
  let secondLevel = false; 
  let thirdLevel = false;

  let lastLevel = document.querySelector('.first-level');

  let selectedGalaxy;

  // obteniendo el click del usuario para el primer level (Galaxias)
  document.querySelectorAll('.galaxy').forEach( oneSquare => {
      oneSquare.onclick = function() {


          selectedGalaxy = oneSquare.getAttribute("name")
          secondLevel = true;
          lastLevel.classList.add('hidden-level')

          //getting suns
          let suns = names.filter(galaxy => 
            galaxy.name === selectedGalaxy
          )
          let allsuns = suns[0].planets

          console.log(allsuns)

          //getting planets
          let planets = names.filter(galaxy => 
            galaxy.name === selectedGalaxy
          )
          let allPlanets = 0

          console.log(allPlanets)

          //calling functions to create planets and suns

          createSuns(allsuns)

          createPlanets(allPlanets)

      }

  }); // ending level de galaxias

  //beginning level 2 

  document.querySelectorAll('.start').forEach( start => {
    start.onclick = function() {


        selectedGalaxy = start.getAttribute("name")
        secondLevel = true;
        lastLevel.classList.add('hidden-level')

        //getting suns
        let suns = names.filter(galaxy => 
          galaxy.name === selectedGalaxy
        )
        let allsuns = suns[0].planets

        console.log(allsuns + "este")

        

        // //getting planets
        // let planets = names.filter(galaxy => 
        //   galaxy.name === selectedGalaxy
        // )
        // console.log(planets)
        // // let allPlanets = planets[0].planets.name

        // console.log(allPlanets)

        // //calling functions to create planets and suns

          createSuns(allsuns)

        // createPlanets(allPlanets)

        
      
    }

}); // ending level de suns



  //second level

  function createSuns(allsuns) {
//     let htmlsuns = '';
//     allsuns.forEach(sun => {
//   htmlSuns += `<div class="square"  name="${sun.name}" price = ${sun.price}>`;
//   htmlSuns += `<img src="star.png" alt="${sun.name}">`;
//   htmlSuns += `<p class="text">${sun.name}</p>`;
//   htmlSuns += `</div>`;
// }
//   )

//       // Add all the divs to the HTML
//   document.querySelector('.second-level').innerHTML = htmlsuns;
  }

  //third level 
  function createPlanets(allPlanets) {
//     let htmlPlanets = '';
// allPlanets.forEach(planet => {
//   htmlPlanets += `<div class="square"  name="${planet.name}" price = ${planet.price}>`;
//   htmlPlanets += `<img src="planet.png" alt="${planet.name}">`;
//   htmlPlanets += `<p class="text">${planet.name}</p>`;
//   htmlPlanets += `</div>`;
// }
//   )
//     console.log('this is where we create the planets')
//     console.log(allPlanets)
//     console.log(htmlPlanets)
//       // Add all the divs to the HTML
//   document.querySelector('.third-level').innerHTML = htmlPlanets;
  }



  







  

}); // End Domcontent

