import { conectaAPI } from "./conectaApi.js";

const listaCard = document.querySelector("[data-productos]");

function crearCard(id, nombre, precio, imagen) {

    const card = document.createElement("li");
    card.className = ("card");
    card.id = `${id}`
    card.innerHTML = `
                        <img class="img-product" src="${imagen}" alt="${nombre}" />
                        <div class="card-container--info">
                            <p>${nombre}</p>
                            <div class="card-container--value">
                                <p>${precio}</p>
                                <button class="btn">
                                    <img class="icono-papelera" src="./img/papelera.png" />
                                </button>
                            </div>
                        </div>

                `

                const eliminar = card.querySelector(".icono-papelera");
                eliminar.addEventListener("click", () => {
                    
                    conectaAPI.eliminarProducto(id).then(() => {
                        card.remove();
                    }).catch((err) => console.log(err));
                });
                
    return card;



}

async function render() {

    try {
        const listaApi = await conectaAPI.listaProductos();

        listaApi.forEach(productos => listaCard.appendChild(crearCard(
            productos.id,
            productos.nombre,
            productos.precio,
            productos.imagen
        ))
        );
    } catch (error) {
        console.log(error)
    }

};

render()
