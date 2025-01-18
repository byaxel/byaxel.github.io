
// Crear el script de Google Analytics
(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-YWE6ZP1Z1T";  // Reemplaza con tu ID de seguimiento
    document.head.appendChild(script);
  
    // Inicializar Google Analytics cuando el script se haya cargado
    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YWE6ZP1Z1T');  // Reemplaza con tu ID de seguimiento
    }
  })();