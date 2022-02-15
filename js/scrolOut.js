ScrollOut({
    targets: ".show-out",
    onShown: function(el) {
        el.classList.add('animate__animated', 'animate__fadeInLeft'); 
        el.style.setProperty('--animate-duration', '2s');
        el.classList.remove('animate__animated', 'animate__fadeInLeft');

         // force reflow
         void el.offsetWidth;

        // re-add the animated cl
        el.classList.add('animate__animated', 'animate__fadeInLeft');
    }
});