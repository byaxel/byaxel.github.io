// Script de Google Analytics
(function() {
    var script = document.createElement('script');
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-YWE6ZP1Z1T";
    document.head.appendChild(script);
  
    // Inicializa Google Analytics
    script.onload = function() {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YWE6ZP1Z1T', {
        'anonymize_ip': true
      });
    }
})();