/* EJERCICIO 3 */
/*defino las variables formulario, anadir, lista y deleteBtn, y con el get element by id coge los ids de cada elemento
del html llaamdos asi  */
const formulario = document.getElementById('formulario');
const anadir = document.getElementById('anadir');
const lista = document.getElementById('lista');
const deleteBtn = document.getElementById('delete');

/*creo la funcion con un event listener para añadir elementos, con "submit"
para cuando el formulario se envía */
formulario.addEventListener('submit', function (evento) {
    /* el preventdefault a continuación es porque me dí cuenta que al enviar el formulario se
    recargaba la página, asi que esto lo previene */
    evento.preventDefault();
    /* el trim es para eliminar los espacios en blanco al principio y al final del texto 
     el if es para que no se añadan elementos vacíos, si el texto es vacío no hace nada */
    const texto = anadir.value.trim();
    if (texto === '') return;

    /* creo un elemento li, y le añado el texto que se ha escrito en el input 
    /* el addEventListener es para que al hacer click en el li, se le añada la clase "marked" */
    const li = document.createElement('li');
    li.textContent = texto;

    li.addEventListener('click', () => {
        li.classList.toggle('marked');
    });

    /* añado el li a la lista, y le añado el valor del lo que introducimos al li 
      y luego lo añado a la lista */
    lista.appendChild(li);
    anadir.value = '';
    anadir.focus();
});

/* el event listener para el botón de eliminar, que al hacer click en el botón,
se eliminan los elementos que tienen la clase "marked" que añadiamos anteriormente..*/
deleteBtn.addEventListener('click', () => {
    const marcados = document.querySelectorAll('li.marked');
    marcados.forEach(el => el.remove());
});