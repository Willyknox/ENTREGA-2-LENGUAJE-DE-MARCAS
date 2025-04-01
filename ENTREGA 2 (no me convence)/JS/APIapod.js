const apiKey = "api_key=IQbbiCsPrSlNVxGuqyljBrJyxbgqqjK5SfpsvdZI";
const apiURL = "https://api.nasa.gov/planetary";
const apiAPOD = "/apod?";
const URL = "https://api.nasa.gov/planetary/apod?api_key=IQbbiCsPrSlNVxGuqyljBrJyxbgqqjK5SfpsvdZI";

fetch(URL)
   .then(res=> console.log(res));
   














/*

// Fetching the API and displaying the data in html index
fetch(apiURL + apiAPOD + apiKey)
    .then(response => response.json())

    .then(data => {
//console.log(data.title);
        //console.log(data.explanation);
        console.log(data.url);
        //console.log(data.title);
        const photoTitle = document.getElementById("photoTitle");
        const photoExplanation = document.getElementById("photoExplanation");
        const photoURL = document.getElementById("photoURL");
    
         //Check if elements exist before setting properties
        if (photoTitle) photoTitle.innerHTML = data.title;
        if (photoExplanation) photoExplanation.innerHTML = data.explanation;
        if (photoURL) photoURL.src = data.url;  
    })
    .catch(error => console.error(error));
