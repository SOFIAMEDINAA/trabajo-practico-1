window.onload = () => {
    generar()
}




function generar() {

    const selecProductos = document.querySelector("#productos").value;
    const selecCantidad = document.querySelector("#cantidad").value;
    const selecColores = document.querySelector("#colores").value;
    const cajaProductos = document.getElementById('productos-caja');
    const producto = document.getElementsByClassName('producto');
    const cantidadProductosText = document.querySelector("#cantidadProductosText");
    const cantidadPorProductoText = document.querySelector("#cantidadPorProductoText");
    const coloresText = document.querySelector("#coloresSeleccionadosText");

    cajaProductos.innerHTML = "";

    for (let i = 0; i < selecProductos; i++) {
        if (selecCantidad == 1) {
            estructuraDeUnProducto = `
            <div class="producto">
            <p>Producto ${i + 1}</p>
            ${elegirImagen()}
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
            <option value="efectivo"> efectivo</option>
            <option value="debito">débito</option>
            <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" class="selec-cant">
                <option value="1">1</option>
            </select>
            <button>Comprar</button>
            </div>`

        }

        else if (selecCantidad == 15) {
            estructuraDeUnProducto = `
            <div class="producto">
            <p>Producto ${i + 1}</p>
            ${elegirImagen()}
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
            <option value="efectivo"> efectivo</option>
            <option value="debito">débito</option>
            <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" class="selec-cant">
                ${generarOpcionesCantidad(15)}
            </select>
            <button>Comprar</button>
            </div>`
        }

        else if (selecCantidad == 25) {
            estructuraDeUnProducto = `
            <div class="producto">
            <p>Producto ${i + 1}</p>
            ${elegirImagen()}
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
            <option value="efectivo"> efectivo</option>
            <option value="debito">débito</option>
            <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" class="selec-cant">
                ${generarOpcionesCantidad(25)}
            </select>
            <button>Comprar</button>
            </div>`
        }

        else if (selecCantidad == 50) {
            estructuraDeUnProducto = `
            <div class="producto">
            <p>Producto ${i + 1}</p>
            ${elegirImagen()}
            <p>Seleccione metodo de pago:</p>
            <select name="seleccione-metodo-pago" id="selec-metodo-pago">
            <option value="efectivo"> efectivo</option>
            <option value="debito">débito</option>
            <option value="credito">crédito</option>
            </select>
            <p>Seleccione cantidades</p>
            <select name="selec.cant" class="selec-cant">
                ${generarOpcionesCantidad(50)}
            </select>
            <button>Comprar</button>
            </div>`
        }


        cajaProductos.innerHTML += estructuraDeUnProducto;

    }

    if (selecColores == "0") {
        for (let i = 0; i < producto.length; i++) {
            producto[i].style.backgroundColor = "grey"
        }
    }
    else if (selecColores == "purpura-violeta") {
        for (let i = 0; i < producto.length; i++) {
            let iParOImpar = i % 2;
            if (iParOImpar == 0) {
                producto[i].style.backgroundColor = "purple";
            }
            else if (iParOImpar != 0) {
                producto[i].style.backgroundColor = "violet";
            }
        }
    }
    else if (selecColores == "rojo-azul") {
        for (let i = 0; i < producto.length; i++) {
            let iParOImpar = i % 2;
            if (iParOImpar == 0) {
                producto[i].style.backgroundColor = "red";
            }
            else if (iParOImpar != 0) {
                producto[i].style.backgroundColor = "blue";
            }
        }
    }
    else if (selecColores == "rosa-naranja") {
        for (let i = 0; i < producto.length; i++) {
            let iParOImpar = i % 2;
            if (iParOImpar == 0) {
                producto[i].style.backgroundColor = "pink";
            }
            else if (iParOImpar != 0) {
                producto[i].style.backgroundColor = "orange";
            }
        }
    }
    else if (selecColores == "verde-beige") {
        for (let i = 0; i < producto.length; i++) {
            let iParOImpar = i % 2;
            if (iParOImpar == 0) {
                producto[i].style.backgroundColor = "green";
            }
            else if (iParOImpar != 0) {
                producto[i].style.backgroundColor = "beige";
            }
        }
    }


    cantidadProductosText.innerHTML = `La cantidad de productos a mostrar es: ${selecProductos}`;
    cantidadPorProductoText.innerHTML = `Cantidad permitida por cada producto: ${selecCantidad}`;
    coloresText.innerHTML = `Los colores seleccionado a usar son: ${selecColores}`;
}

function generarOpcionesCantidad(cantidad) {
    let opciones = "";
    let contador = 0;
    while (contador < cantidad) {
        opciones += `<option value="${contador + 1}">${contador + 1}</option>`
        contador++;
    }
    return opciones;
}

function elegirImagen() {
    let imagen = "";
    let numeroAleatorio = Math.floor(Math.random() * 10);
    if (numeroAleatorio == 0) {s
        imagen = `<img src="./images/imagen1.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 1) {
        imagen = `<img src="./images/imagen2.webp" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 2) {
        imagen = `<img src="https://www.holded.com/wp-content/uploads/2020/09/ciclo-de-vida-de-un-producto-4.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 3) {
        imagen = `<img src="https://mycontent.agency/wp-content/uploads/2021/10/Creation-process-amico-1210x660.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 4) {
        imagen = `<img src="https://cdn-icons-png.flaticon.com/512/5617/5617585.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 5) {
        imagen = `<img src="https://cdn-icons-png.flaticon.com/512/1822/1822045.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 6) {
        imagen = `<img src="https://cdn-icons-png.flaticon.com/512/7032/7032300.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 7) {
        imagen = `<img src="https://cdn.icon-icons.com/icons2/2869/PNG/512/product_refund_icon_181857.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 8) {
        imagen = `<img src="https://cdn-icons-png.flaticon.com/512/1822/1822045.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 9) {
        imagen = `<img src="https://cdn-icons-png.flaticon.com/512/7032/7032300.png" alt="imagen 1">`;
    }
    else if (numeroAleatorio == 10) {
        imagen = `<img src="https://cdn.icon-icons.com/icons2/2869/PNG/512/product_refund_icon_181857.png" alt="imagen 1">`;
    }
    return imagen;
}
