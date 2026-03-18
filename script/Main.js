const contenedorPaises = document.getElementById("contenedorPaises");



fetch("/data/data.xml").then((response) => response.text())
    .then((data) => {

        const parser = new DOMParser();
        const xml = parser.parseFromString(data, "text/xml");
        const paises = xml.getElementsByTagName("pais");

        for(let pais of paises){

            const nombre = pais.getElementsByTagName("nombre")[0].textContent;
            const poblacion = pais.getElementsByTagName("poblacion")[0].textContent;
            const tamaño = pais.getElementsByTagName("tamaño")[0].textContent;
            const img = pais.getElementsByTagName("img")[0].textContent;

            contenedorPaises.innerHTML += `
            <div class="info" data-pais data-nombre = ${nombre} 
            data-status="activo">
                <img src="${img}"></img>
                <p>Nombre: ${nombre}</p>
                <p>Población: ${poblacion}</p>
                <p>Tamaño: ${tamaño}</p>
            </div>
            `;

        }

    });

const selector = document.getElementById("selector");
const header = document.getElementById("header");
const info = document.getElementsByClassName("info");
const footer = document.getElementById("footer")
const estilos = document.getElementById("estilos");
selector.addEventListener("change", function(){
    

    if(this.value == "oscuro"){
        //Header
        header.style.backgroundColor = "#3D2B1F";
        header.style.color = "white";
        header.style.borderColor = "white";
        //Background
        document.body.style.backgroundColor = "black";
        
        /*#001F3F*/
        //Tarjetas
        for (let i = 0; i < info.length; i++) {
            info[i].style.backgroundColor = "#3D2B1F";
            info[i].style.color = "white";
            info[i].style.borderColor = "white";
        }   
        //Footer
        footer.style.backgroundColor = "#0F172A";
        footer.style.borderColor = "white";
        footer.style.color = "white";
        estilos.style.backgroundColor = "#0F172A";
        estilos.style.borderColor = "white";
        estilos.style.color = "white";

    }

    if(this.value == "claro"){
        //Header
        header.style.backgroundColor = "beige";
        header.style.color = "black";
        header.style.borderColor = "black";
        //Background
        document.body.style.backgroundColor = "azure";
        
        /*#001F3F*/
        //Tarjetas
        for (let i = 0; i < info.length; i++) {
            info[i].style.backgroundColor = "beige";
            info[i].style.color = "black";
            info[i].style.borderColor = "black";
        }   
        //Footer
        footer.style.backgroundColor = "#475569";
        footer.style.borderColor = "black";
        footer.style.color = "black";
        estilos.style.backgroundColor = "#475569";
        estilos.style.borderColor = "black";
        estilos.style.color = "black";
    }
        const modal = document.getElementById("modal");
        if(this.value == "personalizado"){
            modal.innerHTML = `<p>Configuración de estilo personalizada: </p>
                <div class="personalizar">
                    <p>Cabecera:</p>
                    <input type="color" id="cabecera">
                </div>
                <div class="personalizar">
                    <p>Tarjetas:</p>
                    <input type="color" id="tarjetas">
                </div>
                <div class="personalizar">
                    <p>Fondo:</p>
                    <input type="color" id="fondo">
                </div>
                <div class="personalizar">
                    <p>Menu y Footer:</p>
                    <input type="color" id="menu">
                </div>
                <button id="cerrar">Cerrar</button>
        `;
        const cerrarModal = document.getElementById("cerrar");
        cerrarModal.addEventListener('click', () => {
            modal.close();
        });
        modal.showModal();
        const menu = document.getElementById("menu");
        menu.addEventListener("change", function(){
        estilos.style.backgroundColor = this.value;
        footer.style.backgroundColor = this.value;
        });

        const cabecera = document.getElementById("cabecera");
        cabecera.addEventListener("change", function(){
        header.style.backgroundColor = this.value;
        });

        const tarjetas = document.getElementById("tarjetas");
        tarjetas.addEventListener("change", function(){
        for (let i = 0; i < info.length; i++) {
            info[i].style.backgroundColor = this.value;
        }   
        });

        const fondo = document.getElementById("fondo");
        fondo.addEventListener("change", function(){
        document.body.style.backgroundColor = this.value;
        });

    }
});


// const cabecera = document.getElementById("cabecera");
// cabecera.addEventListener("change", color(cabecera));



// menu.addEventListener("change", color(estilos));
// function color(element){
//     element.style.backgroundColor = "black";
// }


/* Buscador por nombre*/

const buscar = document.getElementById("buscar");
buscar.addEventListener("click", filtrar);

function filtrar(){
    const inputNombre = document.getElementById("inputNombre");
    for(let i = 0; i < info.length; i++){
        let nombre = info[i].dataset.nombre.toLowerCase();
        if(nombre.includes(inputNombre.value.toLowerCase())){
            console.log("coincide")
            
        
        }else{
            info[i].style.display = "none";
            console.log("No coincide")
        }
    }
}

/*Añadir tarjeta*/
const añadirTarjeta = document.getElementById("añadirTarjeta");
añadirTarjeta.addEventListener("click", modalTarjeta);
function modalTarjeta(){
    const modalTarjeta = document.getElementById("modalTarjeta");
        modalTarjeta.innerHTML = `
                <div id="divModal">
                    <p id="tituloModal">Crea tu tarjeta: </p>
                    <div id="crearTarjeta">
                        <input type="text" placeholder="Nombre del país" id="tarjetaNombre">
                        <input type="text" placeholder="Población del país" id="tarjetaNombre">
                        <input type="text" placeholder="Tamaño del país" id="tarjetaNombre">
                    </div>
                    <div id="divBotones">
                        <button id="cerrarModal">Cerrar</button>
                        <button id="aplicar">Aplicar</button>
                    </div>
                </div>
        `;
        const cerrarModal = document.getElementById("cerrarModal");
        cerrarModal.addEventListener('click', () => {
            modalTarjeta.close();
        });
        modalTarjeta.showModal();
        
}
