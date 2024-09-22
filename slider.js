let currentIndex = 0; // Track the current position of the slider
const slidesToShow = 3; // Number of slides to show on desktop
const slides = document.querySelectorAll('.slide'); // All the slides
const sliderTrack = document.querySelector('.slider-track'); // The container that moves

// Function to move the slides
function moveSlide(direction) {
    const totalSlides = slides.length; // Total number of slides
    const maxIndex = totalSlides - slidesToShow; // The farthest index we can move to without leaving empty space

    // Update currentIndex based on the direction (left or right)
    currentIndex += direction;

    // If we're at the first slide and trying to go left, stay at 0
    if (currentIndex < 0) {
        currentIndex = 0;
    }

    // If we're at the last possible set of slides and trying to go right, stay there
    if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    // Calculate the new position of the slider track
    const translateX = -(currentIndex * (100 / slidesToShow));
    sliderTrack.style.transform = `translateX(${translateX}%)`;
}

// Automatically move slides every 5 seconds
let autoSlideInterval = setInterval(() => moveSlide(1), 5000); // Auto-change every 5 seconds

// Function to pause the auto-slideshow when the user interacts
function pauseSlideshow() {
    clearInterval(autoSlideInterval); // Stop the auto slideshow
}

// Function to resume the slideshow after user interaction
function resumeSlideshow() {
    autoSlideInterval = setInterval(() => moveSlide(1), 5000); // Restart auto slideshow
}

// Adding event listeners to the next and previous buttons
document.querySelector('.slider-prev').addEventListener('click', () => {
    pauseSlideshow(); // Pause auto slide when clicked
    moveSlide(-1); // Move slide to the left
    resumeSlideshow(); // Restart auto slide
});

document.querySelector('.slider-next').addEventListener('click', () => {
    pauseSlideshow(); // Pause auto slide when clicked
    moveSlide(1); // Move slide to the right
    resumeSlideshow(); // Restart auto slide
});

// Add keyboard navigation for left/right arrows
document.addEventListener('keydown', function (event) {
    if (event.key === "ArrowLeft") {
        pauseSlideshow();
        moveSlide(-1); // Navigate to previous slide
        resumeSlideshow();
    } else if (event.key === "ArrowRight") {
        pauseSlideshow();
        moveSlide(1); // Navigate to next slide
        resumeSlideshow();
    }
});
