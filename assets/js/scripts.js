/*//SCRIPT PARA SIDENAV, COLLAPSIBLE Y CAROUSEL



$(document).ready(function(){
    $('.sidenav').sidenav();
});

//Inicializacion del Collapsible

$(document).ready(function(){
    $('.collapsible').collapsible();
});

//Inicializacion del Carousel con opciones personalizadas

document.addEventListener('DOMContentLoaded', function() {
    var options = {
      fullWidth: true, // Carousel ocupa todo el ancho de su contenedor
      indicators: true,
      dist:0, // Muestra los indicadores de posición
      duration: 200, // Duración de la transición en milisegundos
      dist: -800, // Distancia entre los elementos (negativa para mostrar más elementos)
      //shift: 50, // Desplazamiento al usar los indicadores
      numVisible: 1,
    };
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);

    function nextSlide(){
      var instance = M.Carousel.getInstance(elems[0]);
      instance.next();
    }
    setInterval(nextSlide, 3500);

});*/
$(document).ready(function(){
    //Inicializacion del Sidenav
    $('.sidenav').sidenav();

    //Inicializacion del Collapsible
    $('.collapsible').collapsible();
    
    //Inicializacion del Carousel con opciones personalizadas
    var options = {
      fullWidth: true,
      indicators: true,
      //dist: -800,
      //duration: 3500,
      //numVisible: 1,
    };
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, options);
  
    function nextSlide(){
      var instance = M.Carousel.getInstance(elems[0]);
      instance.next();
    }
    setInterval(nextSlide, 5500);
  });
