
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
            offset:80
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

    

  (function() {
    emailjs.init("service_VagaJa"); // User ID
  })();

  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_VagaJa', 'template_VagaJa', this)
      .then(function() {
        alert('Mensagem enviada com sucesso!');
      }, function(error) {
        alert('Erro ao enviar. Tente novamente.');
        console.log(error);
      });
  });

