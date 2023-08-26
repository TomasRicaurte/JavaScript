// Objeto Lista de contactos

let ListaDeContactos = [ {
    id: 1,
    nombres: "Juanito",
    apellidos: "alcachofa",
    telefono: 3216540879,
    ubicacion: "La Habana, Cuba"
}, {
    id: 2,
    nombres: "Pedro",
    apellidos: "Navaja",
    telefono: 3216540879,
    ubicacion: "San juan, Puerto rico"
}

];

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

function QuitarContacto(id) {
    let indice = ListaDeContactos.findIndex(contacto => contacto.id === id);
    
    if (indice !== -1){
        let ContactoEliminado = ListaDeContactos.splice(indice, 1)
        return ContactoEliminado [0];
    } else {
        return null
    }
}

// Funcion para actualizar datos de contactos

function actualizarContacto(id, nuevosDatos) {
    const indice = ListaDeContactos.findIndex(contacto => contacto.id === id)

    if (indice !== -1) {
        ListaDeContactos[indice] = {...ListaDeContactos[indice], ...nuevosDatos};
    } else {
        console.log("No se encontró ningún contacto con esta ID.");
    }
}

// Ejemplo de uso
AgregarContacto(3, "Laura", "Sanchez", 1234567890, "Bogota, Kennedy")
AgregarContacto(4, "Tomas", "Ricaurte", 9876543210, "Bogota, Fontibon")

let ContactoEliminado = QuitarContacto()

actualizarContacto(2, {telefono: 6789054321})

console.log(ListaDeContactos)
