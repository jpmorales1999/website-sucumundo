// Select Elements HTML

const linksPrimary = document.querySelector(".links-primary");
const linksSecondary = document.querySelector(".links-secondary");
const navigation = document.querySelector(".navigation");
const menu = document.querySelector(".navbar__menu");
const sections = document.querySelectorAll("section");
const config = {
    rootMargin: "0px",
    threshold: [0.6, 0.9],
};

// Config Responsive

function handleLlinks() {
    if (window.innerWidth <= 991) {
        linksPrimary.classList.toggle("visible");
        linksSecondary.classList.toggle("visible");
    }
}

// Event click active function handleLinks
menu.addEventListener("click", handleLlinks);
linksPrimary.addEventListener("click", handleLlinks);
linksSecondary.addEventListener("click", handleLlinks);

// Config Window Scroll CSS for size
window.addEventListener("scroll", function () {
    window.scrollY > 600 && (navigation.style.background = `#5F7942`);
    window.scrollY < 600 && (navigation.style.background = `transparent`);
});

/* Config active class */

let observer = new IntersectionObserver(function (entries, self) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            intersectionHandler(entry);
        }
    });
}, config);

sections.forEach((section) => {
    observer.observe(section);
});

function intersectionHandler(entry) {
    const id = entry.target.id;
    const currentlyActive = document.querySelector(".links-primary  .active");
    const shouldBeActive = document.querySelector(
        ".links-primary [data-ref=" + id + "]"
    );

    if (currentlyActive) {
        currentlyActive.classList.remove("active");
    }
    if (shouldBeActive) {
        shouldBeActive.classList.add("active");
    }
}

// Config Swiper JS

window.addEventListener('resize', function () {
    let configSwiper = {}

    if (window.innerWidth <= 760) {
        configSwiper = {
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }
        }
    } else {
        configSwiper = {
            slidesPerView: 3,
            spaceBetween: 60,
            freeMode: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        }
    }

    const swiper = new Swiper(".swiper-container", configSwiper);

});

if (window.innerWidth <= 760) {
    const swiper = new Swiper(".swiper-container", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        }
    });
} else {
    const swiper = new Swiper(".swiper-container", {
        slidesPerView: 3,
        spaceBetween: 60,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
    });
}