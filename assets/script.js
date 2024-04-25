const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Initialisation du pointeur de slide courant
let currentSlide = 0;
// Appel des fonction d'affichage de la bannière
displayDots(currentSlide);
displaySlide(currentSlide);

// Event handler sur la flèche gauche du carroussel
document.getElementById("leftArrow").addEventListener("click", () => {
	currentSlide--;
	if (currentSlide === -1) currentSlide = slides.length - 1;
	displayDots(currentSlide);
	displaySlide(currentSlide);
});

//Event handler sur la flèche droite du carroussel
document.getElementById("rightArrow").addEventListener("click", () => {
	currentSlide++;
	if (currentSlide === slides.length) currentSlide = 0;
	displayDots(currentSlide);
	displaySlide(currentSlide);
});


// fonction d'affichage des points
function displayDots(currentSlide) {
	let div = "";
	for (let i = 0; i < slides.length; i++) {
		let classe = "class='dot";
		if (i === currentSlide) {
			classe += " dot_selected";
		}
		div += `<div ${classe}'></div>`;
	}
	document.querySelector(".dots").innerHTML = div;
}

// fonction d'affichage de l'image en cours
function displaySlide(currentSlide) {
	document.querySelector(".banner-img").src = "./assets/images/slideshow/" + slides[currentSlide].image;
	document.querySelector("#banner p").innerHTML = `<p>${slides[currentSlide].tagLine} </p>`;
}
