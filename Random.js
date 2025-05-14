const imageButton = document.getElementById("imageBtn");
const imageContainer = document.getElementById("imageContainer");
const img = document.getElementById("dogImage");

function getRandomImage() {
    fetch("https://api.thedogapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        const imageUrl = data[0].url;
        img.src = imageUrl;
        img.alt = "Random Dog Image";
    })
    .catch(error => {
        console.error("Error fetching the image:", error);
    });
}

imageButton.addEventListener("click", getRandomImage);
getRandomImage(); // Load a random image on page load
