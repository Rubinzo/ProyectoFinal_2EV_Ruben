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

        votar();

    });
