/* EJERCICIO 5 */
/* defino las variables fichas y casillas. Con querySelectorAll selecciono todos los elementos que tienen 
la clase .ficha y .casilla, porque en este caso hay varios y por eso son clases en vez de ids como los anteriores ejercicios*/
const fichas = document.querySelectorAll('.ficha');
const casillas = document.querySelectorAll('.casilla');

/* hago un forEach para recorrer cada una de las fichas */
fichas.forEach(ficha => {
  /* añado un event listener a cada ficha para cuando se empiece a arrastrar (evento dragstart) */
  ficha.addEventListener('dragstart', evento => {
    /* con dataTransfer.setData guardo el id de la ficha que se está arrastrando.
       Esto es como “marcarla” para luego saber cuál es */
    evento.dataTransfer.setData('id', evento.target.id);
  });
});

/* ahora recorro todas las casillas con otro forEach */
casillas.forEach(casilla => {
  /* añado un event listener a cada casilla para el evento dragover (cuando una ficha pasa por encima).
     Esto es necesario para permitir que se pueda soltar algo dentro, si no, el navegador no lo permite */
  casilla.addEventListener('dragover', evento => {
    evento.preventDefault(); // esto es obligatorio para que se active el drop
  });

  /* otro event listener, ahora para el evento drop (cuando suelto una ficha dentro de la casilla) */
  casilla.addEventListener('drop', evento => {
    evento.preventDefault(); // también aquí prevengo el comportamiento por defecto

    /* añado una condición: solo permito soltar la ficha si la casilla está vacía,
    o sea, si no tiene ningún hijo dentro */
    if (casilla.children.length === 0) {
      /* recupero el id de la ficha que se estaba arrastrando */
      const fichaId = evento.dataTransfer.getData('id');

      /* con ese id, busco la ficha en el documento */
      const ficha = document.getElementById(fichaId);

      /* finalmente, añado esa ficha dentro de la casilla (como hijo) */
      casilla.appendChild(ficha);
    }
  });
});
