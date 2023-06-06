
const selecCantMostrar = document.querySelector("#Cant-a-mostrar");
const selecProdPermitidos = document.querySelector("#cant-perm-producto");
const selecOpcColores = document.querySelector("#opciones-colores");
const cajaProductos = document.querySelector ("#productos-caja");
/* const selecMetPago= document.querySelector ("#selec-metodo-pago"); */
/* const seleccantProductos = document.querySelector("#selec-cant"); */



function generar() {

    for (let i = 0; i < (selecCantMostrar); i++) {
        if (selecProdPermitidos == 1) {
            estructuraDeUnProducto = `
        <div id="contenedor-producto">
            <p>Producto ${i+1}</p>
            <img id="imagen-produc"
                src="https://i5.walmartimages.com/asr/5632ea62-2863-48e5-863b-c1959d44d4d4_3.1adab353621df98f9e65970c94e2ede9.jpeg"
                alt="imagen">
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
                <option value="efectivo"> efectivo</option>
                <option value="debito">débito</option>
                <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" id="selec-cant">
                <option value="1">1</option>
            </select>
            <button>Comprar</button>
        </div>`

        }

        else if (selecProdPermitidos == 15) {
            estructuraDeUnProducto = `
        <div id="contenedor-producto">
            <p>Producto ${i+1}</p>
            <img id="imagen-produc"
                src="https://i5.walmartimages.com/asr/5632ea62-2863-48e5-863b-c1959d44d4d4_3.1adab353621df98f9e65970c94e2ede9.jpeg"
                alt="imagen">
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
                <option value="efectivo"> efectivo</option>
                <option value="debito">débito</option>
                <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" id="selec-cant">
                ${generarOpcionesDeCantidad (15)}
            </select>
            <button>Comprar</button>
        </div>`
        }

        else if (selecProdPermitidos == 25) {
            estructuraDeUnProducto = `
        <div id="contenedor-producto">
            <p>Producto ${i+1}</p>
            <img id="imagen-produc"
                src="https://i5.walmartimages.com/asr/5632ea62-2863-48e5-863b-c1959d44d4d4_3.1adab353621df98f9e65970c94e2ede9.jpeg"
                alt="imagen">
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
                <option value="efectivo"> efectivo</option>
                <option value="debito">débito</option>
                <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" id="selec-cant">
                ${generarOpcionesDeCantidad (25)}
            </select>
            <button>Comprar</button>
        </div>`
        }

        else if (selecProdPermitidos == 50) {
            estructuraDeUnProducto = `
        <div id="contenedor-producto">
            <p>Producto ${i+1}</p>
            <img id="imagen-produc"
                src="https://i5.walmartimages.com/asr/5632ea62-2863-48e5-863b-c1959d44d4d4_3.1adab353621df98f9e65970c94e2ede9.jpeg"
                alt="imagen">
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
                <option value="efectivo"> efectivo</option>
                <option value="debito">débito</option>
                <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" id="selec-cant">
                ${generarOpcionesDeCantidad (50)}
            </select>
            <button>Comprar</button>
        </div>`
        }

        cajaProductos.innerHTML += estructuraDeUnProducto;

    }
}