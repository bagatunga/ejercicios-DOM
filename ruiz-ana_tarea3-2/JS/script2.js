/* EJERCICIO 2 */
function juego(miEleccion) {
    /* aquí hay dos constantes, una llamada valores que es un array donde meto los tres elementos
    y otra que se llama computerEleccion donde elige al azar uno de los elementos del array, donde math.random
    genera un numero aleatorio entre el 0 y el 2 (se redondea con math.floor) */

    const valores = ['piedra', 'papel', 'tijera'];
    const computerEleccion = valores[Math.floor(Math.random() * valores.length)];

    // selecciona las imágenes de resultado
    const playerImagen = document.getElementById('imgJugador1');
    const computerImagen = document.getElementById('imgJugador2');

    // cambia las imágenes según las elecciones
    playerImagen.src = './Imágenes/' + miEleccion + '.jpg';
    computerImagen.src = './Imágenes/' + computerEleccion + '.jpg';

    /* defino una variable donde irá el resultado, usando una estructura if
    donde están las distintas posibilidades: empate, si mi eleccion y computerEleccion son iguales;
    ganaste, donde hay varias elecciones donde ganaría miEleccion; y perdiste que sería todo lo demas */

    let resultado = '';
    if (miEleccion === computerEleccion) {
        resultado = '¡Empate!';
    } else if (
        (miEleccion === 'piedra' && computerEleccion === 'tijera') ||
        (miEleccion === 'papel' && computerEleccion === 'piedra') ||
        (miEleccion === 'tijera' && computerEleccion === 'papel')
    ) {
        resultado = '¡Ganaste!';
    } else {
        resultado = '¡Perdiste!';
    }

    // imprime por pantalla el resultado que salga
    document.getElementById('resultado').innerText = 'Resultado: ' + resultado;
}