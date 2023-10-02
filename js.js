
let boton = document.getElementById("boton");
let contenedor = document.getElementById("contenedor");
let listado = [];





boton.addEventListener("click", function() {
    let tema = document.getElementById("buscador").value;
    let aleatorio = Math.floor(Math.random() * 900) + 100;

    let nuevoContenedor = document.createElement("div");
    nuevoContenedor.classList.add("contenedor2");

    nuevoContenedor.innerHTML = `
        <p>${tema}</p>
        <img class="imagen" src="https://picsum.photos/${aleatorio}">
        <button class="eliminar">Eliminar</button>
        <button class="eliminarCompletar">Completar</button>
    `;

    
    contenedor.appendChild(nuevoContenedor);
    listado.push(nuevoContenedor);
    


    // Event listener para eliminar dentro del nuevoContenedor
    nuevoContenedor.querySelector(".eliminar").addEventListener("click", function() {
       
        contenedor.removeChild(nuevoContenedor);
     
        listado.splice(listado.indexOf(nuevoContenedor), 1);
    });
 
    // Limpiar el campo de búsqueda
    document.getElementById("buscador").value = "";
});






