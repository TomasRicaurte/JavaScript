// Objeto Lista de contactos

let ListaDeContactos = [ {
    id: 3,
    nombres: "Juanito",
    apellidos: "alcachofa",
    telefono: 3216540879,
    ubicacion: "Bogotá, bosa"
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

// Ejemplo de uso
AgregarContacto(1, "Laura", "Sanchez", 1234567890, "Bogota, Kennedy")
AgregarContacto(2, "Tomas", "Ricaurte", 9876543210, "Bogota, Fontibon")

let ContactoEliminado = QuitarContacto(1)

console.log(ListaDeContactos)
