async function listaProductos(){
    const conexion = await fetch("http://localhost:3000/productos")
    const conexionConvertida= conexion.json();
    return conexionConvertida;
}



const crearProducto=async ( nombre,precio,imagen)=>{
    try {
        const res = await fetch("http://localhost:3000/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                precio,
                imagen,
            })
        });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
}


const eliminarProducto = async (id) => {
    try {
        return await fetch(`http://localhost:3000/productos/${id}`, {
            method: "DELETE",
        });
    } catch (err) {
        return console.log(err);
    }
}; 



export const conectaAPI ={
    listaProductos,crearProducto,eliminarProducto

}