document.addEventListener("DOMContentLoaded", function() {
    const { innerHeight } = window;

    gsap.from(".title-box", {
        scale: 220, 
        y: 0,
        force3D: false,
        stagger: 0.25, 
        duration: 1,
        scrollTrigger: {
            trigger: ".hero-image",
            pin: true,
            start: "top top",  // Start when the top of the section reaches the top of the viewport
            end: `+=${innerHeight * 2}`,  // Extend the end point to give enough space for the animation
            scrub: 0
        }
    });
});

