// MOBILE MENU
const openMenu = document.querySelector('.open-menu');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', function() {
    mobileNav.classList.add('mobile-nav--show')
    document.body.classList.add('no-scroll')

    closeMenu.addEventListener('click', function() {
        mobileNav.classList.remove('mobile-nav--show')
        document.body.classList.remove('no-scroll')
    })
})

// VIDEO
const videoButton = document.querySelector('#video-button');
const videoButtonIcon = document.querySelector('#video-button-icon');
const videoOverlay = document.querySelector('.story__video-overlay');
const videFile = document.querySelector('#video-store');

videoButton.addEventListener('click', function() {

    function toggleOverlay(event) {
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden')
        } else {
            videoOverlay.classList.remove('hidden')
        }
    }

    if (videFile.paused) {
        videFile.play();
        videoButtonIcon.src = './img/video/pause.svg';
        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;
    } else {
        videFile.pause();
        videoButtonIcon.src = './img/video/play.svg';
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;
    }

})