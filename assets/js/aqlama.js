
// smooth scroll
// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin:30,
    dots: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            loop:false
        }
    }
});


// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items:1,
    loop:true,
    nav: true,
    dots: false
})



const mySelect = document.getElementById('nativeLanguage');
const div1 = document.getElementById('arabicText');
const div2 = document.getElementById('arabicDialect');

mySelect.addEventListener('change', () => {
    if (mySelect.value === 'Arabic') {
      div1.style.display = 'block';
      div2.style.display = 'block';
    } else {
      div1.style.display = 'none';
      div2.style.display = 'none';
    }
  });