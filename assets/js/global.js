document.addEventListener('DOMContentLoaded', function () {
    // Load Header
    const headerContainer = document.getElementById('header-container');
    fetch('assets/common/header.html')
        .then(response => response.text())
        .then(html => {
            headerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading header:', error));

    // Load Footer
    const footerContainer = document.getElementById('footer-container');
    fetch('assets/common/footer.html')
        .then(response => response.text())
        .then(html => {
            footerContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading footer:', error));

    // Parallax Effect
    window.addEventListener('scroll', function() {
        const parallax = document.querySelector('body');
        let scrollPosition = window.pageYOffset;
        parallax.style.backgroundPositionY = -scrollPosition * 0.2 + 'px'; // Adjust the speed here (0.3 is the multiplier)
    });
});
