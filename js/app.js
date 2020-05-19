var owl = $('.owl-carousel');
owl.owlCarousel({
    loop:true,
    nav:true,
    margin:100,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },            
        960:{
            items: 2
        },
        1200:{
            items: 3
        }
    }
});
owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY>0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});

// Start Header Modifiying
window.onscroll = function () {
    let nav = document.querySelector('.navbar'),
        logo = document.getElementById('logo');

    if (window.scrollY >= 200) {
        nav.classList.add('nav-fixed');
        logo.setAttribute('src', 'images/logo-yellow.png');
    } else{
        nav.classList.remove('nav-fixed');
        logo.setAttribute('src', 'images/logo-yellow.png');
    }

    // For Features 
    let featureBox = document.querySelectorAll('.feature-box');
    
    if (window.scrollY >= 900){
        featureBox.forEach(element => {
            console.log('ahmed')
            element.style.animationPlayState = 'running';
        });
    } 
}
// End Header Modifiying
// Start Intro Images Animation Trigger
window.onload = function () {
    let mibileImg = document.getElementById('mobile');
    mibileImg.style.animationPlayState = 'running'
}
// End Intro Images Animation Trigger
// Start Trigger Feature's Animation 


// Start Trigger Feature's Animation 
