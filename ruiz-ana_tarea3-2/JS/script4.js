/* EJERCICIO 4 */
/* defino las variables contenedor, colorTexto y boton, usando getElementById para coger los elementos
del HTML que tienen esos id */
const contenedor = document.getElementById('contenedor-color');
const colorTexto = document.getElementById('color');
const boton = document.getElementById('cambiar-color');

/* aquí compruebo que los tres elementos existen antes de seguir,
solo si todos existen se ejecuta lo de dentro del if */
if (contenedor && colorTexto && boton) {

  /* añado un event listener al botón, que escucha cuando se hace click en él y
  cuando se hace click, se genera un nuevo color aleatorio con la función generarColor  */
  boton.addEventListener('click', () => {
    const nuevoColor = generarColor();

    /* con esto cambiamos el color de fondo del contenedor al nuevo color generado */
    contenedor.style.backgroundColor = nuevoColor;

    /* y aquí se muestra el código del color en el texto  */
    colorTexto.textContent = nuevoColor;
  });

  /* creo una función llamada generarColorHex que se encarga de crear un color aleatorio */
  function generarColor() {
    /* estas son las letras y números posibles para un color (del 0 al 9 y de la A a la F) */
    const letras = '0123456789ABCDEF';

    /* empiezo con el símbolo '#' que siempre va delante de un color */
    let color = '#';

    /* hago un bucle 6 veces porque un color tiene 6 caracteres después del '#' */
    for (let i = 0; i < 6; i++) {
      /* en cada vuelta del bucle, elijo una letra o número aleatorio de la variable 'letras'
      y lo añado al string 'color'. Math.random() genera un número aleatorio entre 0 y 1, lo multiplico por 16 
      (multiplico por 16 porque los colores hexadecimales tienen 16 posibles valores mencionados antes) para que esté entre 0 y 15,
      y luego lo redondeo hacia abajo con Math.floor() para que sea un número entero*/
      color += letras[Math.floor(Math.random() * 16)];
    }

    /* al final devuelvo el color generado*/
    return color;
  }
}
