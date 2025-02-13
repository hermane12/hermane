document.addEventListener("DOMContentLoaded", function () {
    const profilePic = document.querySelector(".profile img");

    profilePic.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.1)";
        this.style.transition = "0.3s";
    });

    profilePic.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
    });

    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.color = "#ffcc00";
        });

        link.addEventListener("mouseout", () => {
            link.style.color = "#007bff";
        });
    });
});