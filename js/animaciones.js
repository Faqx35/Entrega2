// Función para verificar si el elemento está visible en la ventana
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function animateOnScroll() {
    var animatedElements = document.querySelectorAll('.animated');
  
    animatedElements.forEach(function (element) {
      var boxPosition = element.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;
  
      // Calcular la posición relativa del div en la ventana
      var relativePosition = 1 - (boxPosition / windowHeight);
  
      // Establecer la opacidad en función de la posición relativa
      element.style.opacity = relativePosition >= 0 ? relativePosition : 0;
    });
  }
  
 // Evento para llamar a la función de animación cuando se produce un scroll
window.addEventListener('scroll', animateOnScroll);

// Llamamos a la función una vez para animar el div si ya está visible en la carga inicial
animateOnScroll();