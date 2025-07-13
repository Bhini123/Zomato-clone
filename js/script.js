document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");

    // Animate placeholder change
    input.addEventListener("focus", () => {
        input.placeholder = "Type to search...";
    });

    input.addEventListener("blur", () => {
        input.placeholder = "Search for restaurant, cuisine orb a dish";
    });

    // Optional fade-in effect for page content
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => {
        document.body.style.opacity = 1;
    }, 100);
});
