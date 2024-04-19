

/*Obtener las dimensiones del contenedor*/
let contenedor = document.querySelector('.contenedor');
let contenedorWidth = contenedor.offsetWidth;
let contenedorHeight = contenedor.offsetHeight;

/*es el número de elementos de lista (<li>) que se crearán */
let bloqueCreate = 60;

/*bg calcula el ancho de cada elemento <li> dividiendo el ancho de la ventana (pg) por el número de elementos. */
let bg = contenedorWidth / bloqueCreate;

/*Se crean 2000 elementos
Cada uno tiene un id único id="bloque1, bloque2..."
Cada elemento tiene una clase bloque
Se agregan como hijos de  bgmouseE  */
for (let i = 1; i <= 1000; i++) {
    let li = document.createElement("li");
    li.id = "bloque" + i;
    li.className = "bloque";
    li.style.width = bg + "px";
    li.style.height = bg + "px";
    
    document.getElementById("bgmouseE").appendChild(li);

}


let bgmouseELi = document.querySelectorAll("ul#bgmouseE li");

bgmouseELi.forEach(function (e) {
    e.addEventListener("mouseover", function () {
        let index = Array.from(bgmouseELi).indexOf(e);
        e.style.background = "#E6E6E6";
        setTimeout(function () {
            bgmouseELi[index].style.background = "#CFCFCF";
        }, 2000);
    });
});
