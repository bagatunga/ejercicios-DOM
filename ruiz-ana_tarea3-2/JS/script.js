/* EJERCICIO 1 */
const cuadrado = document.getElementById('cuadrado'); /* coge el id cuadrado */
const maxSize = 400;  /* tamaño maximo */
const minSize = 50; /* tamaño minimo */

/* esta funcion es la que hace agrandar el tamaño del cuadrado */
function agrandar() {
    const currentSize = parseInt(window.getComputedStyle(cuadrado).width); /* coge el tamaño actual del ancho css (width)*/
    /* mirar apuntes DOM linea 117 y modificarlo */
    /* currentSize es el tamaño actual del cuadrado y añade 50 px por cada click, la variable newSize seria el nuevo tamaño. */
    const newSize = currentSize + 50;

    /*con una estructura if, hago el alert de que el cuadrado no puede ser más grande que el valor de la variable maxSize,
    si el nuevo tamaño es mayor que este. todo lo demás agregará ancho(width) y largo(height) con los pixeles definidos anteriormente.*/
    if (newSize > maxSize) {
        alert('El cuadrado no puede ser más grande que el tamaño máximo permitido.');
    } else {
        cuadrado.style.width = newSize + 'px';
        cuadrado.style.height = newSize + 'px';
    }
}

/* esta funcion es la que hace disminuir el tamaño del cuadrado, es identica a la función anterior pero cambiando las variables al minimo ya 
que estaremos disminuyendo el cuadrado. */
function disminuir(evento) {
    /* preventDefault hace que al hacer click derecho no nos salga el tipico menú de opciones que sale en cualquier pagina web*/
    evento.preventDefault();
    const currentSize = parseInt(window.getComputedStyle(cuadrado).width);
    const newSize = currentSize - 50;

    if (newSize < minSize) {
        alert('El cuadrado no puede ser más pequeño que el tamaño mínimo permitido.');
    } else {
        cuadrado.style.width = newSize + 'px';
        cuadrado.style.height = newSize + 'px';
    }
}

/* con los event listener agregamos los botones que van a funcionar (click izquierdo y derecho del raton) y además llamamos a las funciones
anteriores para que hagan su función */
cuadrado.addEventListener('click', agrandar);

cuadrado.addEventListener('contextmenu', disminuir);








