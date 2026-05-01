function iniciarJuego() {
    let botonMascotaJugador = document.getElementById("boton-mascota");
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let inputLangostel = document.getElementById("langostel");
    let inputTucapal = document.getElementById("tucapal");
    let inputPydos = document.getElementById("pydos");

    let spanMascotaJugador = document.getElementById("mascota-jugador");
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge";
        alert("SELECCIONASTE A TU MASCOTA");
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo";
        alert("SELCCIONASTE A CAPIPEPO");
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya";
        alert("SELECCIONASTE A RATIGUEYA");
    } else if (inputLangostel.checked) {
        spanMascotaJugador.innerHTML = "Langostel";
        alert("SELECCIONASTE A LANGOSTEL");
    } else if (inputTucapal.checked) {
        spanMascotaJugador.innerHTML = "Tucapal";
        alert("SELCCIONASTE A TUCAPAL");
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos";
        alert("SELECCIONASTE A " PYDOS);
    } else {
        alert("SELECCIONA UNA MASCOTA");
    }
}

window.addEventListener("load", iniciarJuego);
