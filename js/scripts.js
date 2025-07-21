
window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector('#mainNav');
    const img = document.getElementById("logoImg");
    if (!navbarCollapsible || !img) {
        return;
    }
    if (window.scrollY === 0) {
        navbarCollapsible.classList.remove('navbar-shrink');
        img.src = "/assets/img/Capturar.png"; // Altera para logo padrão
    } else {
        navbarCollapsible.classList.add('navbar-shrink');
        img.src = "/assets/img/CapturarFundo.png"; // Altera para logo fundo
    }
};

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
        
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
