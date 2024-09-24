let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = parseFloat(document.getElementById('valorGasto').value); // Asegúrate de convertir el valor a número

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    actualizarListaGastos();
    limpiar(); // Limpiar campos después de agregar
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;

    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = listaValoresGastos[posicion];

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button></li>`;

        // Calcular el total de gastos
        totalGastos += valorGasto;
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}
