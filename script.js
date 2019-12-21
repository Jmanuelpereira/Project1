  //global variables

  let firstLevel = document.querySelector('.first-level');
  let secondLevel = document.querySelector('.second-level');
  let thirdLevel = document.querySelector('.third-level');
  let descrip = document.querySelector(".description");

  let selectedGalaxy;
  let iniFuel = 1000;
  let costFuel = 0;

  //hover things

  // let galaxy;
  // let sun;
  // let planet;  
  
  document.addEventListener("DOMContentLoaded", function(event) { 

    document.querySelector('.start').onclick = function() {
          
      let startButton = document.querySelector('.startButtons');
      startButton.classList.add('hidden-level')
      
    //creating timer
    let timer = 300
  
    setInterval(function(){
      // start:
      timer--
  
      document.querySelector(".timer").innerHTML = timer;
      if (timer === 0) {
        timer = 300;
        setTimeout(function(){
          document.location.reload()
        }, 1000);
        return alert("You dont have more time, YOU LOSE!")
      
      }
    }, 1000)


//some util functions 

function genSquares(){
    let numValue = 0 ;
    for (i = 0; i < names.length; i++){
        // numValue = Math.floor(Math.random() * names.length);
        allSquares.push(names[i]);
     

    }
   
}

//fuel function

function actualFuel(fuelCost){


  if(iniFuel >= 0){
  iniFuel -= fuelCost
  return iniFuel
  }
  else 
    return alert("You dont have more fuel, YOU LOSE!")

}

document.querySelector(".fuel").innerHTML = iniFuel


//creating galaxys ramdon
genSquares();

const nuevoGame = new spaceGame(allSquares);




//CREATION OF GALAXYS, SUNS AND PLANETS HTML

//creating galaxys
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


  //creating suns

  function createSuns(allsuns) {
    let htmlSuns = '';
    allsuns.forEach(sun => {
  htmlSuns += `<div class="square star"  name="${sun.name}" price = ${sun.price}>`;
  htmlSuns += `<img src="star.png" alt="${sun.name}">`;
  htmlSuns += `<p class="text">${sun.name}</p>`;
  htmlSuns += `</div>`;
}

  )

      // Add all the divs to the HTML
  secondLevel.innerHTML = htmlSuns;
  }

  //creating planets 
  function createPlanets(allPlanets) {
    let htmlPlanets = '';
allPlanets.forEach((planet, id) => {
  htmlPlanets += `<div class="square planet"  name="${planet.name}" price = ${planet.price}>`;
  htmlPlanets += `<img src="planet${id}.png" alt="${planet.name}">`;
  htmlPlanets += `<p class="text">${planet.name}</p>`;
  htmlPlanets += `</div>`;
}
  )

      // Add all the divs to the HTML
  thirdLevel.innerHTML = htmlPlanets;
  }

  // obteniendo el click del usuario para el primer level (Galaxias)
  document.querySelectorAll('.galaxy').forEach( oneSquare => {

      oneSquare.addEventListener("mouseover", function( event ) { 

        //  descrip.innerHTML = oneSquare.insertAdjacentHTML
        let selectedGalaxy = oneSquare.getAttribute("name")
        
        let galDes = names.filter(galaxy => 
          galaxy.name === selectedGalaxy)

          //insertando html a la descripcion

        descrip.innerHTML = 
        
        
        `
        
        <ul style="list-style: none;">
        <li><h2>${galDes[0].name}</h2></li>
        <li><h4>${galDes[0].description}</h4></li>
        <br>
        <li><b>Price:</b> ${galDes[0].price} fuel</li>
        <li><b>Qty Planets:</b> ${galDes[0].numPlanets}</li>
        <li></li>

      <ul>
         
        `
          
     }) 

      oneSquare.onclick = function() {
        
        selectedGalaxy = oneSquare.getAttribute("name")
        // secondLevel = true;
        firstLevel.classList.add('hidden-level')
        
        //getting suns
        let suns = names.filter(galaxy => 
          galaxy.name === selectedGalaxy
          )
          
          
          let allsuns = suns[0].suns   
          
          //option price on fuel
          document.querySelector(".fuel").innerHTML = actualFuel(suns[0].price)

          //calling functions to create planets and suns
          
          createSuns(allsuns)

          callStarts();

          showPlanetsInfo();

      }

  })
  
  // ending level de galaxias

  //beginning level 2 
const callStarts = () => document.querySelectorAll('.star').forEach(( start, id) => {

  start.addEventListener("mouseover", function( event ) { 
    
    let sunDes = names.filter(galaxy => 
      galaxy.name === selectedGalaxy)
          
      descrip.innerHTML = 
          
      `
      <ul style="list-style:none;">
      <li><h2>${sunDes[0].suns[id].name}</h2></li>
      <li><h4>${sunDes[0].suns[id].description}</h4></li>
      <br>
      <li><b>Price:</b> ${sunDes[0].suns[id].price} fuel</li>
      <li><b>Age:</b> ${sunDes[0].suns[id].old} years old</li>
      <li></li>
      <ul>
      ` 

      showPlanetsInfo();

 }) 

    start.onclick = function() {

        selectedStart = start.getAttribute("name")
        secondLevel.classList.add('hidden-level')

            //getting planets
            let planets = names.filter(galaxy => 
            galaxy.name === selectedGalaxy)
            let allPlanets = planets[0].suns[id].planets

            //option price on fuel
            document.querySelector(".fuel").innerHTML = actualFuel(planets[0].suns[id].price)
            createPlanets(allPlanets) 
            showPlanetsInfo();
    }

}); // ending level de suns



const showPlanetsInfo = () => document.querySelectorAll('.planet').forEach((planet, id) => {

    
  planet.addEventListener("mouseover", function( event ) { 

    let plaDes = names.filter(galaxy => 
      galaxy.name === selectedGalaxy)
   
      descrip.innerHTML = 

      `
      <ul style="list-style:none;">
      <li><h2>${plaDes[0].suns[0].planets[id].name}</h2></li>
      <li><h4>${plaDes[0].suns[0].planets[id].description}</h4></li>
      <br>
      <li><b>Price:</b> ${plaDes[0].suns[0].planets[id].price} fuel</li>
      <li><b>Age:</b> ${plaDes[0].suns[0].planets[id].size}</li>
      <li></li>
      <ul>
      ` 


  })//end mouseover 

  
  planet.onclick = function() {


    let plaDes = names.filter(galaxy => 
      galaxy.name === selectedGalaxy)

    console.log(plaDes[0].suns[0].planets[id].sustainable)

    

    if(plaDes[0].suns[0].planets[id].sustainable === true){
      setTimeout(function(){
        document.location.reload()
      }, 1000);
      return alert("You won")
    }
    if(plaDes[0].suns[0].planets[id].sustainable === false){
      setTimeout(function(){
        document.location.reload()
      }, 1000);
      return alert("You lose, we dont more fuel and you choose a wrong planet :(")
    }

    selectedPlanet = planet.getAttribute("name")
    

        //getting planets
        let planets = names.filter(galaxy => 
        galaxy.name === selectedGalaxy)
        let allPlanets = planets[0].suns[id].planets
      

        //option price on fuel
        document.querySelector(".fuel").innerHTML = actualFuel(350)
    
}
  
  
  

        


});


  
}//end

  

}); // End Domcontent

