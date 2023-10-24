var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
  if (estadoLicuadora == "apagada") {
    estadoLicuadora = "encendido";
    hacerBrrBrr();
    licuadora.classList.add("active");
    console.log("Me prendiste");
  } else {
    estadoLicuadora = "apagada";
    hacerBrrBrr();
    licuadora.classList.remove("active");
    console.log("Me apagaste");
  }
}

function hacerBrrBrr() {
  if (sonidoLicuadora.paused) {
    botonLicuadora.play();
    sonidoLicuadora.play();
  } else {
    botonLicuadora.play();
    sonidoLicuadora.pause();
    sonidoLicuadora.courrenTime = 0;
  }
}
