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

function calcularIdade(ano, mes) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - ano;
    if ((hoje.getMonth() + 1) < mes) {
        idade--;
    }
    return idade;
}

function atualizarIdadesEquipe() {
    const integrantes = [
        { nome: "bruno", ano: 2005, mes: 5 },
        { nome: "caio", ano: 2004, mes: 8 },
        { nome: "eloyse", ano: 2008, mes: 11 },
        { nome: "guilherme", ano: 2008, mes: 11 },
        { nome: "marcos", ano: 2005, mes: 2 },
        { nome: "seridon", ano: 1983, mes: 4 }
    ];

    integrantes.forEach(integrante => {
        const span = document.getElementById(`idade-${integrante.nome}`);
        if (span) {
            span.textContent = calcularIdade(integrante.ano, integrante.mes) + " anos";
        }
    });
}

// Chama ao carregar o site
window.addEventListener('DOMContentLoaded', atualizarIdadesEquipe);