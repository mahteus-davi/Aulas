function timeseg(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });

}


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segs = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
        segs++;
        relogio.innerHTML = timeseg(segs);
    }, 1000);
}

iniciar.addEventListener('click', function (event) {
    clearInterval(timer);
    relogio.classList.remove('color');
    iniciaRelogio();

});

pausar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.add('color');
    

});

zerar.addEventListener('click', function(event){
    clearInterval(timer);
    relogio.classList.remove('color');
    segs = 0;
    relogio.innerHTML = timeseg(segs);

});