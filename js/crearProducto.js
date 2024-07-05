import  format_currency from "./formatoMoneda.js";
import { conectaAPI } from "./conectaApi.js";



const form = document.querySelector("[data-formulario]")


form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value.toUpperCase();
    const precio = format_currency(document.querySelector("[data-precio]").value);
    const imagen = document.querySelector("[data-imagen]").value;

    conectaAPI.crearProducto(nombre, precio, imagen).then((res) => console.log(res)).catch((err) => console.log(err))
})


