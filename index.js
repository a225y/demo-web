var myCarousel = document.querySelector('#carouselExampleFade')
console.log(myCarousel);
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 2000,
    wrap: false
})