
 const accessToken = '75cb54d8468c5215ca3d51685ef6085c';
// Example character ID for Spider
// const baseUrl =`https://akabab.github.io/superhero-api/api/id/${characterId}.json`;

const superherIomage = document.getElementById('superhero-image');
const getNewHeroButton = document.getElementById('NewHeroBtn')
const superheroName = document.getElementById('superhero-container');
const searchSuperheroButton = document.getElementById('SearchBtn')
const searchSuperheroInput = document.getElementById('heroName');
function getRandomCharacterId() {
    const max = 731;
    return Math.floor((Math.random()*max)+1)
}

function searchSuperHero(name_hero) {
  baseUrl = `https://superheroapi.com/api.php/${accessToken}/search/${name_hero}`;
  fetch(baseUrl)
    .then(response => response.json())
    .then(json => {
        console.log(json);
         const imageUrl = json.results[0].image.url;
        //  console.log(imageUrl);
        const name = `${json.results[0].name}`;
        superheroName.textContent = `${name}`;
        superheroName.style.fontSize = '40px';
        const strength = `<p>💪Strength: ${json.results[0].powerstats.strength}</p>`;
        const intelligence = `<p>Intelligence: ${json.results[0].powerstats.intelligence}</p>`;
     superherIomage.innerHTML = `<img src="${imageUrl}" alt="${json.results[0].name}" height="400px" width="300px" /> ${intelligence} ${strength}`;
    })
}

searchSuperheroButton.onclick =()=>{
    const name_hero = searchSuperheroInput.value;
    searchSuperHero(name_hero);
}



function getSuperheroData(characterId) {
    const baseUrl =`https://superheroapi.com/api.php/${accessToken}/${characterId}`;
      fetch(baseUrl)
      .then(response => response.json())
      .then(json =>{
          const imageUrl = json.image.url;
         
        console.log(json);
       const name = `${json.name}`;
        superheroName.textContent = `${name}`;
        superheroName.style.fontSize = '40px';
        const strength = `<p>💪Strength: ${json.powerstats.strength}</p>`;
        const intelligence = `<p>Intelligence: ${json.powerstats.intelligence}</p>`;
        superherIomage.innerHTML = `<img src="${imageUrl}" alt="${json.name}" height="400px" width="300px" /> ${intelligence} ${strength}`;


      })
    console.log('hello');
}
 



// getNewHeroButton.onclick = () => {
   
//     const characterId = getRandomCharacterId();
//     getSuperheroData(characterId);
// }