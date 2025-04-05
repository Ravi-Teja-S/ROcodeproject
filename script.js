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

function addHoverEffect(buttonId, hoverTextId) {
    const button = document.getElementById(buttonId);
    const hoverText = document.getElementById(hoverTextId);

    button.addEventListener('mousemove', (e) => {
        hoverText.style.display = 'block'; // Show hover text
        hoverText.style.left = `${e.pageX + 5}px`; // Position it near the cursor
        hoverText.style.top = `${e.pageY + 5}px`;
    });

    button.addEventListener('mouseleave', () => {
        hoverText.style.display = 'none'; // Hide hover text when leaving
    });
}

// Add hover effects for all buttons
addHoverEffect('religious-mode', 'religious-hover');
addHoverEffect('wellness-mode', 'wellness-hover');
addHoverEffect('schemes-mode', 'schemes-hover');
addHoverEffect('general-mode', 'general-hover');

