// responsive navbar
//Responsive Navbar And Burger Icon
var navSlide = () => {
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelectorAll('.nav-links li');

    //Toggel Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Navlinks
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger animation
        burger.classList.toggle('toggle');

    });

}
navSlide();

// loop through the li add the active class and remove for the navbar 
var myLi = document.querySelectorAll('li');
for (let i = 0; i < myLi.length; i++) {
    myLi[i].addEventListener('click', () => {
        myLi[0].classList.remove('active')
        myLi[0].className.replace('active', ' ');
        this.className += "active"

    });
}

// loop through the li add the active class and remove with jQuery for the languages
$('.translate ul li').on('click', function() {
    $(this).siblings('li').removeClass('selected')
    $(this).addClass('selected')

})