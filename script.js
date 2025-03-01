// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
};

// Apply stored dark mode preference
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// Select Dark Mode Button
const darkModeButton = document.getElementById("dark-mode-btn");
darkModeButton.addEventListener("click", toggleDarkMode);

// Hover Effect on Game Cards
document.querySelectorAll(".game-list li").forEach((card) => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease-in-out";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});