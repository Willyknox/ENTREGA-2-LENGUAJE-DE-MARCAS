const apiAstronaut = 'https://api.le-systeme-solaire.net/rest/bodies/';

fetch(apiAstronaut)
.then((response) => response.json())
.then((data) => {
    console.log("Celestial bodies ", data);
    let arraycelestialbodies = data.bodies;
    celestBodiesList(arraycelestialbodies);
});

celestBodiesList= (arraycelestialbodies) => { 

    let englishName = document.getElementById("name");
    englishName.innerHTML = "";
    let isPlanet = document.getElementById("isPlanet");
    isPlanet.innerHTML = "";
    let radius = document.getElementById("radius");
    radius.innerHTML = "";

    arraycelestialbodies.forEach(item => {
        console.log(item.englishName);
        console.log(item.isPlanet);
        console.log(item.radius);

        let webList = document.createElement("ul");
        let webSubList = document.createElement("li");
        webSubList.innerHTML = item.englishName;
        webList.appendchild(webSublist) = document.createElement("ul");

    })
}