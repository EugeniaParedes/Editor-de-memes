const modoClaro = document.getElementById('modoClaro');
const nombreBoton = document.getElementsByClassName('nombre-boton');

/* función claro/oscuro */ 
const toggleMode = () => {
    document.body.classList.toggle("dark");
}
modoClaro.addEventListener('click', toggleMode); 


// INTETOS CAMBIO NOMBRE 

// const cambioNombre = () => {
//     if(document.body.className=="claro"){
//         document.body.className="dark";
//         nombreBoton.innerText = "modo claro";
//     }else{
//         document.body.className="claro"
//         nombreBoton.innerText = "modo oscuro";
//     }

// modoClaro.addEventListener('click', cambioNombre)

// document.body.classList = 'modoClaro'
// document.prueba = prueba.innerText('modo oscuro')
// prueba.innerText = 'modo oscuro'

// const cambiarModoOscuro = () => {
//     document.body.classList.remove('light-theme')
//     document.body.classList.add('dark-theme')
//   }
//   const cambiarModoClaro = () => {
//     document.body.classList.remove('dark-theme')
//     document.body.classList.add('light-theme')
//   }


//  if (document.body.classList == 'claro') {
//          nombreBoton.innerText = 'Modo claro';
//      }else {
//          nombreBoton.innerText = 'Modo oscuro';
//      }


/* Función url */ 
const imagenURL = document.getElementById('url');
const imagenMeme = document.getElementById('imagenID');

function imagenURLMeme() {
    let url = imagenURL.value;
    imagenMeme.style.backgroundImage = `url("${url}")`;
}
imagenURL.addEventListener('change', imagenURLMeme)
}