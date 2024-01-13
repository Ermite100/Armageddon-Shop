

/*=================================================================================
                                SHOW MENU
==================================================================================*/
const navMenu = document.getElementById("nav-menu"),
    navClose = document.getElementById("nav-close"),
    navToggle = document.getElementById("nav-toggle");

// Menu Show
// Validation if constant exists

if(navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}


// Hide Sow
//  Validation if constant exixts
if(navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*=================================================================================
                                SWIPPER Category
==================================================================================*/


var swiperCategories = new Swiper(".categories-c", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        350: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 5,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 6,
            spaceBetween: 24,
        },
    }
});

/*=================================================================================
                                SWIPPER Products
==================================================================================*/

var swiperProducts = new Swiper(".new-c", {
    spaceBetween: 24,
    loop: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        992: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    }
});


/*=================================================================================
                                PRODUCTS TABS
 ==================================================================================*/

const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("active-tab");
        });

        target.classList.add("active-tab");

        tabs.forEach((tab) => {
            tab.classList.remove("active-tab");
        });

        tab.classList.add("active-tab");
    });
});


/*=================================================================================
                                IMAGE GALLERY
==================================================================================*/

function galleryImg() {
    const mainImg = document.querySelector(".details-img"),
        smallImg = document.querySelectorAll(".details-small-img");

    smallImg.forEach((img) => {
        img.addEventListener("click", function () {
            mainImg.src = this.src;
        });
    });
};

galleryImg();