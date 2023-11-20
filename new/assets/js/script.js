const btn = document.querySelector('.dep');
const ul = document.querySelector('.all-ul');
const icon= document.querySelector('.fa-bars')
const menu = document.querySelector('.menu')



btn.addEventListener('click', function () {
    console.log('salam');
    ul.classList.toggle("opacity");
});


icon.addEventListener('click', function(){
    console.log('salam');
    menu.classList.toggle("menu-opacity")
})



    $(document).ready(function () {
      $('.cards-items').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1200,
        nextArrow: ' <i class="fa-solid fa-angle-right"></i>',
        prevArrow: '<i class="fa-solid fa-angle-left"></i>'
      });
    });


    // $(document).ready(function () {
    //   $('.slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     nextArrow: '<i class="fa-solid fa-angle-right"></i>',
    //     prevArrow: '<i class="fa-solid fa-angle-left"></i>'
    //   });
    // });



