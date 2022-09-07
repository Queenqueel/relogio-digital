const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    let d = dateToday.getDate();
    let m = dateToday.getMonth();
    let a = dateToday.getFullYear();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;


    if (d < 10) d = '0' + d;

    if (m < 10) m = '0' + parseInt(m + 1);

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    dia.textContent = d;
    mes.textContent = m;
    ano.textContent = a;
}, 500)


