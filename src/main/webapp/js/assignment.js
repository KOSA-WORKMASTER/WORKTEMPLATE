new Swiper('header .swiper-container', {
    autoplay: true,
    loop: true,
    slidesPerView: 4,
    navigation: {
        prevEl: 'header .swiper-prev',
        nextEl: 'header .swiper-next'
    }
})

const imgs = document.querySelectorAll("img");
const mainImg = document.querySelector(".main-image img");

imgs.forEach((e) => {
    e.addEventListener("click", (t) => {
        let src = t.target.getAttribute("src");
        console.log(src)
        mainImg.setAttribute("src", src);
    });
});

