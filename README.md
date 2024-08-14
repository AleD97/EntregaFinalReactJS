# Zapatillas E-commerce con React, Vite y Firebase

Este proyecto es una tienda en línea de zapatillas creada con React y Vite, que utiliza Firebase Firestore para gestionar las órdenes de compra. La aplicación permite a los usuarios navegar por una lista de productos, agregar productos al carrito, realizar una orden de compra y guardar los detalles de la orden en Firebase.

## Características

- **Listado de productos**: Los productos se cargan desde Firebase Firestore y se muestran en la página principal.
- **Carrito de compras**: Los usuarios pueden agregar productos al carrito, ver el carrito en un menú desplegable, eliminar productos individuales del carrito y ver el total de la compra.
- **Checkout**: Los usuarios pueden completar un formulario de checkout con su nombre, correo electrónico y dirección, y enviar la orden.
- **Almacenamiento de órdenes**: Los detalles de la orden de compra se guardan en Firebase Firestore.

## Tecnologías Utilizadas

- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **Vite**: Herramienta de desarrollo que proporciona una configuración rápida y ligera para proyectos de React.
- **Firebase**:
  - **Firestore**: Base de datos NoSQL utilizada para almacenar productos y órdenes de compra.
  - **Firebase Authentication** (opcional): Puede integrarse para autenticar a los usuarios si se requiere.