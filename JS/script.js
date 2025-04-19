const body = document.body
const fotos = [
  "./IMG/1.jpg",
  "./IMG/2.jpg",
  "./IMG/3.jpg",
  "./IMG/4.jpg",
  "./IMG/5.jpg",
  "./IMG/6.jpg",
  "./IMG/7.jpg",
]

const fondo = () =>{
  const random = Math.floor(Math.random() * fotos.length);
  fotosFondo = fotos[random]
  body.style.backgroundImage = `url(${fotosFondo})`;
  body.style.backgroundSize = "cover";
  body.style.backgroundPosition = "center";
}


setInterval(() => {
  fondo()
}, 15000)

fondo()

const secciones = document.querySelectorAll(".Ampliar");

secciones.forEach((boton, index) => {
  boton.addEventListener("click", () => {
    if (index === 0) {
      window.location.href = "./Reloj_Digital/index.html";
    } else if (index === 1) {
      window.location.href = "./Weather/index.html";
    } else if (index === 2) {
        window.location.href = "./Generador_Password/index.html";
    } else if (index === 3) {
        window.location.href = "./Gestor_Links/index.html";
    }
  });
});
