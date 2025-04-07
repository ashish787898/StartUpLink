document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".hero-content button");

    buttons.forEach(button => {
        button.addEventListener("mouseover", () => {
            button.style.transform = "scale(1.1)";
        });

        button.addEventListener("mouseout", () => {
            button.style.transform = "scale(1)";
        });
    });
});
/* JavaScript to Move Sphere */
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--y', `${e.clientY}px`);
});
