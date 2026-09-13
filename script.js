// ========================================
// DR. AMAN'S ADVANCE DENTAL CARE
// WEBSITE JAVASCRIPT
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    // ----------------------------------------
    // SMOOTH SCROLL FOR NAVIGATION
    // ----------------------------------------
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // ----------------------------------------
    // HEADER SHADOW ON SCROLL
    // ----------------------------------------
    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", function () {

            if (window.scrollY > 30) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });
    }


    // ----------------------------------------
    // ACTIVE NAVIGATION LINK
    // ----------------------------------------
    const sections = document.querySelectorAll("section[id]");
    const menuLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });

        menuLinks.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    // ----------------------------------------
    // WHATSAPP LINKS
    // ----------------------------------------
    const whatsappLinks = document.querySelectorAll(
        'a[href*="wa.me"]'
    );

    whatsappLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            console.log("Opening WhatsApp appointment chat...");

        });

    });


    // ----------------------------------------
    // IMAGE LOAD CHECK
    // ----------------------------------------
    const images = document.querySelectorAll("img");

    images.forEach(function (image) {

        image.addEventListener("error", function () {

            console.warn(
                "Image could not be loaded:",
                image.getAttribute("src")
            );

        });

    });

});