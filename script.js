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
