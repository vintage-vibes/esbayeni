const swiper = new Swiper(".swiper", {
    loop: true,
    spaceBetween: 30,

    slidesPerView: 1,

    breakpoints: {
        768: {
            slidesPerView: 2,
        },

        1024: {
            slidesPerView: 3,
        }
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    });
},{
    threshold:0.2
});

document.querySelectorAll('.fade').forEach((section)=>{
    observer.observe(section);
});

const mobileNav = document.querySelector('.mobile-nav');
const openBtn = document.querySelector('.burger-menu'); // your hamburger
const closeBtn = document.querySelector('.close-icon');
const links = document.querySelectorAll('.mobile-nav a');

openBtn.addEventListener('click', () => {
    mobileNav.classList.add('open');
});

closeBtn.addEventListener('click', () => {
    mobileNav.classList.remove('open');
});

links.forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('open')
    });
});
