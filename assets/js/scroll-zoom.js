document.addEventListener("DOMContentLoaded", function() {
    const { innerHeight } = window;

    gsap.from(".title-box", {
        scale: 200, 
        y: 0,  // Start centered
        stagger: 0.25, 
        duration: 3,
        scrollTrigger: {
            trigger: ".hero-image",
            pin: true,
            start: "top top",  // Start when the top of the section reaches the top of the viewport
            end: `+=${innerHeight * 2}`,  // Extend the end point to give enough space for the animation
            scrub: 0
        }
    });

    // gsap.to(".hero-image", {
    //     scrollTrigger: {
    //         trigger: ".main-content",  // When the next section starts
    //         start: "top top",  // Start pinning as the next section's top reaches the top
    //         pin: true,
    //         pinSpacing: false, // No additional space added when pinning
    //         scrub: 0
    //     }
    // });
});

