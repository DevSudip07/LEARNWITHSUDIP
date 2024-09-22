// ============= LOADER =============
function loader() {
    var loader = document.querySelector(".loader");
    var main = document.querySelector('main');

    setTimeout(function load() {
        loader.style.display = "none";
        main.style.position = "relative";
    }
        , 2000);
};

loader();

// ============= CALL BUTTON =============
function callButton() {
    var callBtn = document.querySelector('#call-btn');
    callBtn.addEventListener('click', () => {
        document.location.href = "tel:+917001894943";
    });
};

callButton();

// ============= GYANMOOL BUTTON =============
function gyanmoolButton() {
    var gyanmoolButton = document.querySelector('#gyanmool-btn');
    gyanmoolButton.addEventListener('click', () => {
        window.location = 'https://jonitecheducation.netlify.app/';
    });
};

gyanmoolButton();

// ============= YOUTUBE =============
// <!-- Initialize Swiper -->
function ytVideo() {
    const progressCircle = document.querySelector(".autoplay-progress svg");
    const progressContent = document.querySelector(".autoplay-progress span");
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 10000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        // on: {
        //   autoplayTimeLeft(s, time, progress) {
        //     progressCircle.style.setProperty("--progress", 1 - progress);
        //     progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        //   }
        // }
    });
};

ytVideo();

// ============= MOBILE NAVBER =============
function resNav() {
    var menuIcon = document.querySelector('header h1');
    var closeIcon = document.querySelector('aside h1');
    var menu = document.querySelector('aside');
    var servicesMenu = document.querySelector('.services-menu');
    var dropMenu = document.querySelector('.drop');
    var arrow = document.querySelector('.services-menu span');
    var allBody = document.querySelector('body');

    menuIcon.addEventListener('click', () => {
        menu.style.right = '0px';
        allBody.style.position = 'fixed';
    });
    closeIcon.addEventListener('click', () => {
        menu.style.right = '-500px';
        allBody.style.position = 'relative';
    });

    servicesMenu.addEventListener('click', () => {
        dropMenu.style.display = 'block';
        arrow.innerHTML = `<i class="fa-solid fa-chevron-up"></i>`;
    });
};

resNav();

// ============= BANNER TEXT ANIMATION =============
function textAnimation() {
    var typed = new Typed(".proff", {
        strings: ["Full Stack Developer...", "UI/UX Designer...", "YouTuber..."],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
};

textAnimation();

// ============= SKILLS SLIDER =============
function skillSlider() {
    $('.skills-silder').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 7000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
}

skillSlider();

// ============= SEE ALL BUTTON =============
function seeAllBtn() {
    var seeAll = document.querySelector(".see-all-btn");
    var hideBtn = document.querySelector(".hide-all-btn");
    var hide = document.querySelector(".hide");

    seeAll.addEventListener('click', () => {
        hide.style.display = 'flex';
        seeAll.style.display = 'none';
        hideBtn.style.display = 'block';
    })

    hideBtn.addEventListener('click', () => {
        hide.style.display = 'none';
        seeAll.style.display = 'block';
        hideBtn.style.display = 'none';
    });
};

seeAllBtn();

// ============= FEEDBACKS =============
function review() {
    $('.review-container').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 8000,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToScroll: 1,
        loop: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
};

review();

// ============= AOS MOBILE =============
// AOS.init({disable: 'mobile'});+





