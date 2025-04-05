
function navigateToSecondPage() {
    // Ensure the elements exist and are being manipulated correctly
    const homePage = document.getElementById("home-page");
    const secondPage = document.getElementById("second-page");

    if (homePage && secondPage) {
        homePage.style.display = "none"; // Hide the first page
        secondPage.style.display = "block"; // Show the second page
    } else {
        console.error("One or both of the pages could not be found.");
    }
}

// Add hover logic for all buttons
document.querySelectorAll('.mode-btn').forEach(button => {
    const hoverText = button.querySelector('.hover-text');
    
    button.addEventListener('mousemove', (e) => {
        hoverText.style.display = 'block'; // Show hover text
        hoverText.style.left = `${e.pageX + 5}px`; // Position near cursor
        hoverText.style.top = `${e.pageY + 5}px`;
    });

    button.addEventListener('mouseleave', () => {
        hoverText.style.display = 'none'; // Hide hover text
    });
});



