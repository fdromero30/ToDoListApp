ToDoListApp


## FRONTEND

Una vez clonado o descargado el repositorio, ejecute 'npm i' para poder instalar las dependencias necesarias del proyecto angular.

Luego ejecute  `ng serve` para correr el servidor en modo developer. Vaya al navegador a `http://localhost:4200/`.

La aplicacion iniciara automaticamente, http://localhost:4200/#/main/crud-usuarios para ir a la ruta espec'ifica.


## BACKEND

Es necesario tener instalado weblogic 12, para despliegue de la aplicación

Importar el proyecto en eclipse, 

Actualizar las dependencias (maven update project)

Y finalmente compilar desde el proyecto todolist    que empaqueta los demas proyectos.

## FUNCIONAMIENTO APP

Se debe desplegar en weblogic el proyecto backend. configurar el origen de datos, apuntando a base de datos local, y posteriormente, se podran realizar las consultas y actualizaciones desde el app frontend

## ESTRUCTURA DE CÓDIGO

FRONT: el codigo fuente de la aplicación se encuentra dentro de la carpeta src,  

components: encontrará mainframe correposndiente a la estructura del proyecto front, menu-principal correspondiente a controles de accesibilidad, crud-usuarios correpsondiente al componente de administración de ususarios.

models: encontrará los dtos front de mapeo de entidades

pipes: encontrara directivas utilizadas para validaciones en formulario

shared: 
encontrará 

* components: con el modal de confirmación genérico de la aplicación, y el toastr customisado.
* guards: se creo una guarda de mock para simular la validacion de acceso a rutas.
* models: modelos  genericos de los componentes compartidos.
* services: servicio de generación de alertas, constantes.
* global.service: encargado de la gestión de peticiones al BAckEnd
* url.service: encargado de construir las url de peticion al Backend
* shared.module: modulo compartido de la aplicación, para exportar componentes genéricos

BACK: se estructura de la siguiente manera  

todolist-web: la capa que expone los servicios REST.
todolist-ejb: la capa de negocio donde se realizan las validaciones y logica de negocio, tambien se encuentran entidades, dtos y manejadores.

ServicioUsuario: API rest, con metodos CRUD.
NegocioUsuario: Negocio donde se hacen los llamados al ManejadorUsuario que extiende del manejador crud encargado de gestionar la persistencia