let main = document.querySelector('#main');

document.addEventListener('DOMContentLoaded', function() {
    requestAnimationFrame(() => {
        main.style.opacity = 1;
    });
});

window.transicaoPagina = function(href) {
    main.style.opacity = 0;
    setTimeout(function() {
        window.location.href = href;
    }, 200);
}