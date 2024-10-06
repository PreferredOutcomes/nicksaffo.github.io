let currentSlideIndex = 0;
let currentArea = ''; // Global variable to track the current area

const slidesData = {
    area1: ["house9.jpg", "house10.jpg", "house4.jpg"], // Only one group
    area2: ["house11.jpg"], // Only one group
    area3: ["house6.jpg", "house17.jpg"],
	area4: ["house2.jpg","house12.jpg"],
	area5: ["house16.jpg"],
	area8: ["house14.jpg"],
	area9: ["house18.jpg"],
	area7: ["house1.jpg"],
	area10: ["house13.jpg"],
	area11: ["house15.jpg"],
	area6: ["house5.jpg", "house7.jpg"],
	area12: ["house21.jpg"],
    // Add more areas as needed
};

function openSlideshow(area) {
    currentArea = area; // Set the current area
    currentSlideIndex = 0; // Reset slide index
    displayGroup(slidesData[area]); // Display the images for the selected area
    document.querySelector('.slideshow').style.display = 'flex'; // Show the slideshow
}

function displayGroup(images) {
    const slidesContainer = document.getElementById("slides");
    slidesContainer.innerHTML = ''; // Clear the previous slides
    images.forEach(image => {
        const img = document.createElement("img");
        img.src = "images/" + image; // Append the folder 'images/' before the image file name
        slidesContainer.appendChild(img); // Add the image to the slideshow container
    });
    showSlide(0); // Display the first slide by default
}

function showSlide(n) {
    const slides = document.querySelectorAll("#slides img");
    slides.forEach((slide, index) => {
        slide.style.display = (index === n) ? 'block' : 'none'; // Show the current slide, hide others
    });
    currentSlideIndex = n; // Update the current slide index
}

function changeSlide(n) {
    const slides = document.querySelectorAll("#slides img");
    currentSlideIndex = (currentSlideIndex + n + slides.length) % slides.length; // Circular slide navigation
    showSlide(currentSlideIndex); // Show the next/previous slide
}