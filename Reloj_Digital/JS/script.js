function actualizarReloj () {
    const ahora = new Date ();
    let hora = ahora.getHours ();
    let minutos = ahora.getMinutes ();
    let segundos = ahora.getSeconds ();
    hora = hora < 10 ? `0${hora}`:hora;
    minutos = minutos < 10 ? `0${minutos}`:minutos;
    segundos = segundos < 10 ? `0${segundos}`:segundos;
    document.getElementById('time').textContent = `${hora}:${minutos}:${segundos}`;
    let dia = ahora.getDate ();
    let mes = ahora.getMonth () + 1;
    let year = ahora.getFullYear ();
    dia = dia < 10 ? `0${dia}`:dia;
    mes = mes < 10 ? `0${mes}`:mes;
    document.getElementById('date').textContent = `${dia}/${mes}/${year}`;
    const message = document.getElementById('message');
    const verHora = ahora.getHours();
    if (
        verHora >= 6 && verHora <= 12
    ){
        message.textContent = '¡Buenos días devs!'
    }
    else if (
        verHora >= 13 && verHora <= 20
    ){
        message.textContent = '¡Buenas tardes devs!'
    }
    else message.textContent = '¡Buenas noches devs!'
}
    setInterval (actualizarReloj, 1000);

    actualizarReloj ();
