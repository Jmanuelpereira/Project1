const allSquares = [];

const names = [
  {
    name: "Alfa Romeo",
    price: 350,
    estado: true,
    numPlanets: 3,
    description: 'This galaxy is a bit weird, we have little information about it, but many believe it can be an oasis of hidden life, but we don`t have enough information to support that.',
    //suns start
    suns: [

      {
      name: "Alfa Centauri",
      old: 4567,
      description: "It consists of a system of 3 gravitationally joined stars. A ternary system of stars orbiting a center of mass, Alpha Centauri A and Alpha Centauri B, plus a third red dwarf star, Proxima Centauri, which orbits around 2 stars Alpha Centauri A and B.",
      price:150,
      //planets start
      planets: [
        {
        name: "ZRTX-52",
        price: 100,
        sustainable: true,
        img: "planet.png",
        description: "We dont know anything about this weird planet.",
        atmosfera: "",
        size: "Large"
      },
      {
        name: "ARD-B13",
        price: 100,
        sustainable: true,
        img: "planet.png",
        description: "Many consider this the perfect candidate but we do not know if the data is correct.",
        atmosfera: "Oxigeno",
        size: "Small"
      },
      {
        name: "JGP-120",
        price: 100,
        sustainable: true,
        img: "planet.png",
        description: "This planet is a chaos only receives light a few times a year, but nevertheless we know that life can be on a planet with these characteristics under the ground.",
        atmosfera: "Carbono",
        size: "Small"
      },
      
      ]//planet end

      },

      {
        name: "Canopus",
        old: 5890,
        description: " This sun is so hot but still have some planets TEST with good condition to support life",
        price:120,
        //planets start
        planets: [
          {
            name: "ZRTX-52",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "ARD-B13",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "JGP-120",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
        
        ]//planet end
  
        },

      {
        name: "Rigel",
        old: 1268,
        description: " This sun is so cold but there some data TESTO about life behind icebergs on the planet.",
        price:100,
        planets: [
          {
            name: "ZRTX-52",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "ARD-B13",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "JGP-120",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
        
        ]//planet end
  
        },

        {
          name: "Sirius",
          old: 4567,
          description: " This sun is so hot but still have some planets with good condition to support life",
          price:70,
          planets: [
        {
        name: "ZRTX-52",
        price: 100,
        sustainable: true,
        img: "planet.png",
        description: "",
        atmosfera: "",
        size: ""
      },
      {
        name: "ARD-B13",
        price: 100,
        sustainable: true,
        img: "planet.png",
        description: "",
        atmosfera: "",
        size: ""
      },
      {
        name: "JGP-120",
        price: 100,
        sustainable: true,
        img: "planet.png",
        description: "",
        atmosfera: "",
        size: ""
      },
          
          ]//planet end
    
          },

    ]//suns end

   },

   //galaxy 2

   {
    name: "Andromeda",
    price: 450,
    estado: false,
    numPlanets: 5,
    description: 'We discovered this galaxy recently but our long distance probe showed us distorted images of planets with possible habitable atmospheres, it is tangent information but the doubt will always remain in you as a pilot.',
    //suns start
    suns: [

      {
      name: "Enana Blanca",
      old: 2356,
      description: "This white dwarf is almost dead, its energy is almost depleted could provide us with light for a few thousand years but then we would have to go somewhere else if we want to continue with the human species.",
      price:140,
      //planets start
      planets: [
        {
          name: "ZRTX-52",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
        {
          name: "ARD-B13",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
        {
          name: "JGP-120",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
        {
          name: "JGP-120",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
        {
          name: "JGP-120",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
      
      ]//planet end

      },

      {
        name: "Alternative",
        old: 4567,
        description: "It is an old sun but it has high potential. Its planets meet high expectations of bringing life and with many moons around, it could be an adventure, you can imagine 2 moons at night.",
        price:170,
        planets: [
          {
            name: "ZRTX-52",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "ARD-B13",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "JGP-120",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
        
        ]//planet end
  
        },

        {
          name: "Alejandria",
          old: 4567,
          description: " This sun is so hot but still have some planets with good condition to support life",
          price:70,
          planets: [
            {
              name: "ZRTX-52",
              price: 100,
              sustainable: true,
              img: "planet.png",
              description: "",
              atmosfera: "",
              size: ""
            },
            {
              name: "ARD-B13",
              price: 100,
              sustainable: true,
              img: "planet.png",
              description: "",
              atmosfera: "",
              size: ""
            },
            {
              name: "JGP-120",
              price: 100,
              sustainable: true,
              img: "planet.png",
              description: "",
              atmosfera: "",
              size: ""
            },
          
          ]//planet end
    
          },

    ]//suns end

   },

   //galaxy 3 

   {
    name: "Pegasi",
    price: 650,
    estado: true,
    numPlanets: 9,
    description: 'This beautiful galaxy is a mystery, we have never been able to see it completely and reach it would mean spending all our fuel and if we do not find anything safe we ​​must say goodbye to our lives, it is up to you captain.',
    //suns start
    suns: [

      {
      name: "Pegasi B51",
      old: 4567,
      description: " This sun is so hot but still have some planets with good condition to support life",
      price:70,
      //planets start
      planets: [
        {
          name: "ZRTX-52",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
        {
          name: "ARD-B13",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
        {
          name: "JGP-120",
          price: 100,
          sustainable: true,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: ""
        },
      
      ]//planet end

      },

      {
        name: "Alternative",
        old: 4567,
        description: " This sun is so hot but still have some planets with good condition to support life",
        price:70,
        planets: [
          {
            name: "ZRTX-52",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "ARD-B13",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
          {
            name: "JGP-120",
            price: 100,
            sustainable: true,
            img: "planet.png",
            description: "",
            atmosfera: "",
            size: ""
          },
        
        ]//planet end
  
        },

        {
          name: "Alejandria",
          old: 4567,
          description: " This sun is so hot but still have some planets with good condition to support life",
          price:70,
          planets: [
            {
              name: "ZRTX-52",
              price: 100,
              sustainable: true,
              img: "planet.png",
              description: "",
              atmosfera: "",
              size: ""
            },
            {
              name: "ARD-B13",
              price: 100,
              sustainable: true,
              img: "planet.png",
              description: "",
              atmosfera: "",
              size: ""
            },
            {
              name: "JGP-120",
              price: 100,
              sustainable: true,
              img: "planet.png",
              description: "",
              atmosfera: "",
              size: ""
            },
          
          ]//planet end
    
          },

    ]//suns end

   },

   // galaxy 4

   {
    name: "Messier",
    price: 500,
    estado: "",
    numPlanets: 3,
    description: 'This galaxy we know very well however when we were about to land on the last planet something happened with the ship and communication was lost, we could never know if that last planet could be the right one, we would go and find out for ourselves.',
    //suns start
    suns: [

      {
      name: "Pegasi B51",
      old: 4567,
      description: " This sun is so hot but still have some planets with good condition to support life",
      price:70,
      //planets start
      planets: [
        {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      
      ]//planet end

      },

      {
        name: "Alternative",
        old: 4567,
        description: " This sun is so hot but still have some planets with good condition to support life",
        price:70,
        planets: [
          {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        
        ]//planet end
  
        },

        {
          name: "Alejandria",
          old: 4567,
          description: " This sun is so hot but still have some planets with good condition to support life",
          price:70,
          planets: [
            {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          
          ]//planet end
    
          },

    ]//suns end

   },

   //galaxy 5 

   {
    name: "Sombrero",
    price: 410,
    estado: "",
    numPlanets: 7,
    description: 'This galaxy seems to be made by a Mexican, the name gives us the idea that it may be a good thing but we have no real information about this site, we only know that it is a nearby place that we could visit and know in the hope of finding a new home.',
    //suns start
    suns: [

      {
      name: "Pegasi B51",
      old: 4567,
      description: " This sun is so hot but still have some planets with good condition to support life",
      price:70,
      //planets start
      planets: [
        {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      
      ]//planet end

      },

      {
        name: "Alternative",
        old: 4567,
        description: " This sun is so hot but still have some planets with good condition to support life",
        price:70,
        planets: [
          {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        
        ]//planet end
  
        },

        {
          name: "Alejandria",
          old: 4567,
          description: " This sun is so hot but still have some planets with good condition to support life",
          price:70,
          planets: [
            {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          
          ]//planet end
    
          },

    ]//suns end

   },

   //galaxy 6 

   {
    name: "Centaurus",
    price: 750,
    estado: "",
    numPlanets: 8,
    description: 'On earth we always think that this is the best option, it has all the possibilities of being a place for life and to sustain us for years but we never take on the task of sending an exploration ship with living beings, many believe that this is the suitable but will it be?',
    //suns start
    suns: [

      {
      name: "Pegasi B51",
      old: 4567,
      description: " This sun is so hot but still have some planets with good condition to support life",
      price:70,
      //planets start
      planets: [
      {
        name: "Artemisa",
        price: 100,
        sustainable: true,
        img: "planet.png",
        description: "This planet is as rare as it is imperfect but it could have some different and interesting species of life.",
        atmosfera: "",
        size: "Large"
      }, 
      {
        name: "ALG-52Z",
        price: 150,
        sustainable: false,
        img: "planet.png",
        description: "",
        atmosfera: "",
        size: "Small"
      }, 
      
      ]//planet end

      },

      {
        name: "Alternative",
        old: 4567,
        description: " This sun is so hot but still have some planets with good condition to support life",
        price:70,
        planets: [
          {
          name: "ARD-4582",
          price: 150,
          sustainable: false,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: "Small"
        }, 
        {
          name: "ExoPlanet50",
          price: 50,
          sustainable: true,
          img: "planet.png",
          description: "Exoplanets are known to have almost all the components necessary for life and for the development of new species.",
          atmosfera: "",
          size: "Medium"
        }, 
        {
          name: "Cafetal Moon",
          price: 125,
          sustainable: false,
          img: "planet.png",
          description: "",
          atmosfera: "",
          size: "Medium"
        }, 
        
        ]//planet end
  
        },

        {
          name: "Alejandria",
          old: 4567,
          description: " This sun is so hot but still have some planets with good condition to support life",
          price:70,
          planets: [
            {
            name: "Rubicks",
            price: 50,
            sustainable: false,
            img: "planet.png"
          }, 
          {
            name: "MouseGal",
            price: 150,
            sustainable: false,
            img: "planet.png"
          }, 
          {
            name: "Earth OP",
            price: 150,
            sustainable: false,
            img: "planet.png"
          }, 
          
          ]//planet end
    
          },

    ]//suns end

   },

   //galaxy 7
   
   {
    name: "Pinwheel",
    price: 510,
    estado: "",
    numPlanets: 3,
    description: 'The data in the system about this galaxy is corrupt.',
    //suns start
    suns: [

      {
      name: "Pegasi B51",
      old: 4567,
      description: " This sun is so hot but still have some planets with good condition to support life",
      price:70,
      //planets start
      planets: [
        {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      {
        name: "ARD",
        price: -50,
        sustainable: true,
        img: "planet.png"
      }, 
      
      ]//planet end

      },

      {
        name: "Alternative",
        old: 4567,
        description: " This sun is so hot but still have some planets with good condition to support life",
        price:70,
        planets: [
          {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        {
          name: "ARD",
          price: -50,
          sustainable: true,
          img: "planet.png"
        }, 
        
        ]//planet end
  
        },

        {
          name: "Alejandria",
          old: 4567,
          description: " This sun is so hot but still have some planets with good condition to support life",
          price:70,
          planets: [
            {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          {
            name: "ARD",
            price: -50,
            sustainable: true,
            img: "planet.png"
          }, 
          
          ]//planet end
    
          },

    ]//suns end

   },


   
  ]

  let initialDescription = "It is the year 2055 human beings have finished all the natural resources of our planets and we have to make the decision to go to the search for a new home, we do not have all the information because during the take off the computer engineering on board died and the data It is confusing but we know that in one of these galaxies there is a habitable planet, help us find it, but fast that time does not stop. <br> <br> We have little fuel and little time choose options on the table wisely.";