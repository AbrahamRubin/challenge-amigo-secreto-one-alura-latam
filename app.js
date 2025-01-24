// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
// Crear una lista vacía para almacenar los nombres de los amigos.
let amigos = [];

// Función para establecer focus en el campo de texto al cargar la página.
window.onload = () => {
    document.getElementById("amigo").focus();

    // Detectar tecla "Enter" y activar el botón "Añadir".
    document.getElementById("amigo").addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            agregarAmigo();
        }
    });

    // Detectar tecla "Espacio" y activar el botón "Sortear amigo".
    document.addEventListener("keydown", (event) => {
        if (event.key === " ") {
            event.preventDefault(); // Evita que la página se desplace hacia abajo.
            sortearAmigo();
        }
    });
};

// Función para agregar un nombre a la lista.
function agregarAmigo() {
    const nombre = document.getElementById("amigo").value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombre)) {
        alert("Solo se permiten letras y espacios. Por favor, corrige el nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus(); // Regresar el foco al input después de agregar.
}

// Función para actualizar la lista visual en la página.
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un nombre aleatorio de la lista.
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}
