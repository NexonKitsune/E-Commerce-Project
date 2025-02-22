"use strict";
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const introElement = document.querySelector(".intro");
        if (introElement) {
            introElement.style.opacity = "0";
            introElement.style.transform = "scale(0.9)";
            setTimeout(() => {
                introElement.style.display = "none";
            }, 1000); // Wait for the animation to finish before hiding intro
        }
    }, 3000); // Display intro for 3 seconds
});
window.addEventListener('load', () => {
    const hubElement = document.getElementById('hub');
    // You can add more dynamic behavior using TS
    if (hubElement) {
        setTimeout(() => {
            hubElement.style.animationPlayState = 'running';
        }, 500); // Delay before starting the bounce
    }
});
