
const planets = {
    mercury: {
        name: "Mercury",
        description: "Mercury is the smallest planet in our solar system. It’s just a little bigger than Earth's Moon.",
        image: "mercury.jpg"
    },
    venus: {
        name: "Venus",
        description: "Venus is the second planet from the Sun and is the hottest planet in the solar system.",
        image: "venus.jpg"
    },
    earth1: {
        name: "Earth",
        description: 'Earth is the third planet from the Sun, uniquely positioned within the habitable zone, allowing life to thrive.',
        image: "earth.jpg"
    },
    mars: {
        name: "Mars",
        description: "Mars is a dusty, cold, desert world with a very thin atmosphere. It’s the fourth planet from the Sun.",
        image: "mars.jpg"
    },
    jupiter: {
        name: "Jupiter",
        description: "Jupiter is the largest planet in our solar system and has more than 75 moons.",
        image: "jupiter.jpg"
    },
    saturn: {
        name: "Saturn",
        description: "Saturn is the sixth planet from the Sun and is famous for its stunning rings.",
        image: "saturn.jpg"
    },
    uranus: {
        name: "Uranus",
        description: "Uranus is the seventh planet from the Sun and has a unique tilt that causes its extreme seasons.",
        image: "uranus.jpg"
    },
    neptune: {
        name: "Neptune",
        description: "Neptune is the eighth and farthest planet from the Sun. It’s known for its beautiful blue color.",
        image: "neptune.jpg"
    }
};

function showPlanetInfo(planet) {
    const planetInfo = planets[planet];
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
        <html>
            <head>
                <title>${planetInfo.name}</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color:#000;
                        color: white;
                        text-align: center;
                        margin: 0;
                        padding-top: 50px;
                    }
                    img {
                        width: 300px;
                        border-radius: 100%;
                      padding-top: 120px;
                          animation: colors 3s linear infinite;
                    }
                           @keyframes colors{
                           100%{
                                 transform: rotate(360deg) translatex(20px);
                                 
            }
            
        }
           p{
           padding-top:20px;
           font-family:cambria;
           font-size:22px;
           
           }
          
        
                        
                    button {
                        margin-top: 20px;
                        padding: 10px 20px;
                        font-size: 18px;
                        cursor: pointer;
                        background-color: white;
                        color: black;
                        border: none;
                        border-radius: 5px;
                        
                    }
                    button:hover {
                        background-color: wheat;
                    }
                </style>
            </head>
            <body>
                <h1>${planetInfo.name}</h1>
                <img src="${planetInfo.image}" alt="${planetInfo.name}">
                <p>${planetInfo.description}</p>
                <button onclick="window.close()">Back</button>
            </body>
        </html>
    `);
}