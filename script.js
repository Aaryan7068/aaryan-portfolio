// Interactive Typewriter Effect for Hero Subsection
const phrases = [
    "Computer Vision Solutions.",
    "Machine Learning Models.",
    "Data Analytics Frameworks.",
    "Scalable Automation Pipelines."
];

let phraseIndex = 0;
let characterIndex = 0;
let isDeleting = false;
const targetElement = document.querySelector(".typewriter");

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        targetElement.textContent = currentPhrase.substring(0, characterIndex - 1);
        characterIndex--;
    } else {
        targetElement.textContent = currentPhrase.substring(0, characterIndex + 1);
        characterIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && characterIndex === currentPhrase.length) {
        typeSpeed = 1800; // Delay when fully parsed
        isDeleting = true;
    } else if (isDeleting && characterIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 400; // Reset delay
    }

    setTimeout(typeEffect, typeSpeed);
}

// Initialize Animation on Content Load
document.addEventListener("DOMContentLoaded", () => {
    if (targetElement) {
        setTimeout(typeEffect, 500);
    }
});
