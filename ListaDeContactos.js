// Objeto Lista de contactos

let ListaDeContactos = [ {
    id: 1,
    nombres: "Juanito",
    apellidos: "alcachofa",
    telefono: 3216540879,
    ubicacion: {Ciudad:"La Habana, Cuba", direccion:"Julio A Mella - Maceo"}
}, {
    id: 2,
    nombres: "Pedro",
    apellidos: "Navaja",
    telefono: 3216540879,
    ubicacion: {Ciudad:"San Juan, Puerto Rico", direccion:"Calle 6 - calle 13"}
}

]

// Funcion para agregar un elemento a la lista

function AgregarContacto(id, nombres, apellidos, telefono, ubicacion) {
    let NuevoContacto = {
        id: id,
        nombres: nombres,
        apellidos: apellidos,
        telefono: telefono,
        ubicacion: ubicacion,
    };

    ListaDeContactos.push(NuevoContacto);
    return NuevoContacto;
}

// Funcion para eliminar un contacto de la lista

function QuitarContacto(direccion) {
    let indice = ListaDeContactos.findIndex(contacto => contacto.ubicacion.direccion === direccion);
    
    if (indice !== -1){
        let ContactoEliminado = ListaDeContactos.splice(indice, 1)
        return ContactoEliminado [0];
    } else {
        return null
    }
}

// Funcion para actualizar datos de contactos

function actualizarContacto(id, nuevosDatos) {
    let indice = ListaDeContactos.findIndex(contacto => contacto.id === id)

    if (indice !== -1) {
        ListaDeContactos[indice] = {...ListaDeContactos[indice], ...nuevosDatos};
    } else {
        console.log("No se encontró ningún contacto con esta ID.");
    }
}

// Ejemplo de uso
AgregarContacto(3, "Laura", "Sanchez", 1234567890, {ciudad:"Bogota, Kennedy", direccion:"cl 26 sur #70h"})
AgregarContacto(4, "Tomas", "Ricaurte", 9876543210, {Ciudad:"Bogota, Fontibon", direccion:"cl 25c #85b"})

let ContactoEliminado = QuitarContacto()

actualizarContacto(2, {telefono: 6789054321})

function ImprimirContactos() {
    console.log(ListaDeContactos)
}

//console.log(ListaDeContactos)

ImprimirContactos()