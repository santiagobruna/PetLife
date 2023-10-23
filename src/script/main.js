let elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach((duvida) => {
    duvida.addEventListener('click', function(){
        duvida.classList.toggle('ativa');
    })
})