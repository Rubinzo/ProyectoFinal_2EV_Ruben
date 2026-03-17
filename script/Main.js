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

selector.addEventListener("change", function(){
    const info = document.getElementsByClassName("info");
    const footer = document.getElementsByClassName("footer");
    const estilos = document.getElementsByClassName("estilos");

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
        estilos.style.backgroundColor = "#0F172A";
        estilos.style.borderColor = "white";

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
        estilos.style.backgroundColor = "#475569";
        estilos.style.borderColor = "black";

    }
});


