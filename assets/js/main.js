// document.addEventListener('DOMContentLoaded', () => {
//     const stickyText = document.querySelector('#stickyText');
//     const heroImage = document.querySelector('.hero-image');
//     const header = document.querySelector('header');
//     const headerHeight = header.offsetHeight;

//     // Position beneath header
//     stickyText.style.top = `${headerHeight}px`;

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             // Section height parameters
//             const isVisible = entry.boundingClientRect.top + entry.boundingClientRect.height < headerHeight;
//             const isPartiallyVisible = entry.intersectionRatio < 0.05;

//             if (isVisible && isPartiallyVisible) {
//                 stickyText.classList.add('visible');
//             } else {
//                 stickyText.classList.remove('visible');
//             }
//         });
//     }, {
//         root: null, // Viewport as starting point
//         threshold: 0, // 0 (end of container) 1 (start of container)
//         rootMargin: `-${headerHeight}px 0px 0px 0px` // root margin acc to header height
//     });

//     // Observe the landing section
//     observer.observe(heroImage);
// });

function scrollName() {
    const stickyText = document.querySelector('#stickyText');
    const heroImage = document.querySelector('.hero-image');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    // Position beneath header
    stickyText.style.top = `${headerHeight}px`;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Section height parameters
            const isVisible = entry.boundingClientRect.top + entry.boundingClientRect.height < headerHeight;
            const isPartiallyVisible = entry.intersectionRatio < 0.05;

            if (isVisible && isPartiallyVisible) {
                stickyText.classList.add('visible');
            } else {
                stickyText.classList.remove('visible');
            }
        });
    }, {
        root: null, // Viewport as starting point
        threshold: 0, // 0 (end of container) 1 (start of container)
        rootMargin: `-${headerHeight}px 0px 0px 0px` // root margin acc to header height
    });

    // Observe the landing section
    observer.observe(heroImage);
}

document.addEventListener("DOMContentLoaded", function() {
    scrollName();
});

function scrollText() {

}
// const observer = new IntersectionObserver((entries) => {
//     entries. forEach((entry) => {
//         console.log (entry)
//         if (entry.isIntersecting) {
//             entry. target.classList.add('show');
//         } else {
//             entry. target. classList. remove('show');
//         }
//     });
// });
// const hiddenElements = document. querySelectorAll('.hidden');
// hiddenElements. forEach((el) => observer. observe(el));