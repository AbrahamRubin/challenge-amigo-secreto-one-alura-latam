<!-- Este es un comentario y no aparecerá en el README -->
<!-- para ver la lista previa de este archivo desde el VSC dar clic derecho sobre el archivo README.md y seleccionar Preview-->

# 🎉 Amigo Secreto 🎉

**Amigo Secreto** es una aplicación sencilla y divertida que permite a los usuarios realizar un sorteo aleatorio entre amigos agregados a la lista, ideal para reuniones, festividades y eventos.

<a href="https://enlace.com">
  <img src="assets/vista-previa.png" alt="Vista previa de la aplicación" width="600" />
</a>

<!-- Tamaño Original ==  ![Vista previa de la aplicación](assets/vista-previa.png )/ -->


## 📋 Descripción

Esta aplicación web permite:
- Agregar nombres de amigos a una lista.
- Validar que los nombres ingresados sean únicos y contengan solo letras.
- Visualizar los nombres ingresados en una lista dinámica.
- Realizar un sorteo aleatorio para determinar quién es el "amigo secreto".
- Eliminar nombres si se ingresaron por error.

## 🚀 Funcionalidades

1. **Agregar nombres**:  
   Los usuarios pueden escribir nombres en un campo de texto y agregarlos a la lista haciendo clic en el botón "Añadir".  
   - Se valida que el campo no esté vacío.  
   - No se permiten nombres duplicados.  
   - Solo se aceptan nombres con letras y espacios (no números ni símbolos).  

2. **Visualizar y gestionar la lista**:  
   Los nombres ingresados se muestran en una lista dinámica. Cada nombre tiene un botón para eliminarlo si es necesario.

3. **Sorteo aleatorio**:  
   Al hacer clic en "Sortear amigo", la aplicación selecciona un nombre al azar y lo muestra como resultado.

## 🛠️ Tecnologías utilizadas

- **HTML5**: Estructura del proyecto.
- **CSS3**: Estilizado de la interfaz de usuario.
- **JavaScript**: Lógica y funcionalidades del proyecto.

## 📂 Estructura del proyecto

├── index.html # Archivo principal del proyecto 
├── style.css # Estilos para el diseño de la aplicación 
├── app.js # Lógica y funcionalidades en JavaScript 
├── assets/ # Carpeta de imágenes e íconos 
└── README.md # Descripción del proyecto

## 🖥️ Cómo usar el proyecto

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/amigo-secreto.git

2. **Abre el archivo index.html en tu navegador.
3. **Interactúa con la aplicación:
    Agregar nombres: Ingresa el nombre de un amigo en el campo de texto y haz clic en "Añadir".
    Si el nombre ya existe, verás una alerta.
    Si el nombre contiene caracteres no permitidos (números o símbolos), la aplicación te pedirá corregirlo.
    Visualizar la lista: Los nombres agregados aparecerán en una lista visible, y podrás eliminar cualquier nombre haciendo clic en el botón "X".
4.  **Sortear un amigo secreto: Una vez que tengas una lista de nombres, haz clic en    "Sortear amigo". El nombre seleccionado al azar se mostrará en la pantalla.


Desarrollado con ❤️ por Abraham.
