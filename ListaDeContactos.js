let ListaDeContactos = [
    "Fabian Obando",
    "Juan Cantillo",
    "Laura Sanchez",
    "David Gonzales",
    "Camila Quintero",
    "Claudia Velazco",
    "Nicolas Zuluaga",
    "Jose Ricaurte",
    "Ruben Ricaurte",
    "Florinda Ososrio",
    "Fanny Rodriguez"
];

// Funcion para agregar un elemento a la lista

function AgregarContacto(contacto, lista) {
    lista.push(contacto);
}
AgregarContacto("Elena Manrique", ListaDeContactos)

// Funcion para eliminar un contacto de la lista

function QuitarContacto(contacto, lista) {
    let indice = lista.indexOf(contacto);
    if (indice !== -1){
        lista.splice(indice, 1);
        console.log("El contacto ${contacto} ha sido eliminado.");
    } else {
        console.log("El contacto ${contacto} no existe en la lista.")
    }
}

QuitarContacto("David Gonzales", ListaDeContactos)

console.log(ListaDeContactos)

