const ProductosCoder = []

function agregarProductos(codigo,marca,producto){
    const articulo = {
        codigo:codigo,
        marca:marca,
        producto:producto
    }
    ProductosCoder.push(articulo)
}

function verDatosProductos(codigo){
    for (const articulo of ProductosCoder) {
        if(articulo.codigo == codigo){
            alert("CODIGO: " + articulo.codigo + " MARCA: " + articulo.marca + " PRODUCTO: " + articulo.producto)
        }
    }
}

function verDatosProductos(marca){
    for (const articulo of ProductosCoder) {
        if(articulo.marca == marca){
            alert("CODIGO: " + articulo.codigo + " MARCA: " + articulo.marca + " PRODUCTO: " + articulo.producto)
        }
    }
}

function main(){
    alert("Bienvenid@ a nuestra plataforma!")
    let continuar = confirm("Quiere realizar una accion?")
    while(continuar){
        const accion = prompt("Ingresar accion | Crear, Buscar, Eliminar")
        if(accion == "Crear"){
            const codigoIngresa = prompt("Ingrese CODIGO del nuevo producto")
            const marcaIngresa = prompt("Ingrese MARCA del nuevo producto")
            const productoIngresa = prompt("Ingrese NOMBRE del nuevo producto")
            agregarProductos(codigoIngresa,marcaIngresa,productoIngresa)
            verDatosProductos(codigoIngresa)
            verDatosProductos(marcaIngresa)
            verDatosProductos(productoIngresa)
            
        }else if(accion =="Buscar"){
            const marcaIngresa = prompt("Ingresa MARCA a buscar")
            verDatosProductos(marcaIngresa)

        }else if(accion =="Eliminar"){
            alert("Ud NO tiene permisos para ELIMINAR productos")

        }else {
            alert("accion no valida")
        }
        continuar = confirm("Quiere realizar otra accion?")
    }
}

main()