function navigateToSecondPage() {
    document.getElementById("home-page").classList.add("hidden");
    const secondPage = document.getElementById("second-page");
    secondPage.classList.remove("hidden");
    secondPage.classList.add("visible");
}

function navigateToHomePage() {
    const secondPage = document.getElementById("second-page");
    secondPage.classList.add("hidden");
    secondPage.classList.remove("visible");
    document.getElementById("home-page").classList.remove("hidden");
}
// Select all dropdown buttons
// Toggle dropdown on click
document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent window click from closing it immediately
        const dropdownContent = button.nextElementSibling;
        dropdownContent.classList.toggle('show');

        // Close other dropdowns
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content !== dropdownContent) {
                content.classList.remove('show');
            }
        });
    });
});

// Close dropdown if clicked outside
window.addEventListener('click', () => {
    document.querySelectorAll('.dropdown-content').forEach(content => {
        content.classList.remove('show');
    });
});

