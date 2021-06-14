# USER APP
User app es una React Native Application para la gestión de una lista de usuarios y la realización de funcionalidades CRUD a la DB a través de una API proporcionada por INNOCV-Solutions.
<br>
<br>

## Información de usuarios

La información de los usuarios contenidos en la App proviene de dos fuentes:
<br>
<br>
**1-** Información proporcionada por la API de INNOCV-Solutions. Es la información principal del usarios y en la que se basa el ```'Schema'``` de cada documento de usuarios en la DB.
```
{
    name: _'User name'_,
    birthdate: _'date'_
}
```
En caso de no ser posible obtener la información de la API se cargará una lista de usuarios de ejemplo alojada en .data/exampleList.js
<br>
<br>

**2-** Información adicional obtenida a través de la API libre: ```https://randomuser.me/api/```. 

A cada usuario cargado en la App se le incorpora información random adicional. La App mostrará:
```Imagen de usuario```, ```Email```, ```Teléfono``` y ```Dirección```.

Esta nueva información se incorpora al momento de obtener la Data de la fuente principal de INNOCV-Solutions, por lo que cada vez que la App actualiza la lista de usuarios haciendo una nueva llamada a la API de INNOCV-Solutions, los usuarios también actualizarán su información random adicional, cambiando de imagen, email, teléfono y dirección. 

Simplemente esta funcionalidad tiene el sentido de mejorar la visualización de información de cada usuario. Las funcionalidades CRUD que realiza la App se hacen en la DB de INNOCV-Solutions con su ```'Schema' ``` de usuario.
<br>
<br>

## Funcionalidad _Change Color Theme_:

En la pantalla inicial de la App es posible elegir el color del tema principal de la App; Tocando el logo de la App cambiará de manera aleatoria el color de los componentes. El color elegido será utilizado de manera general en toda la App.
<br>
<br>

## Ventanas modales:

Los formularios para la realización de las funcionalidades Create, Modify, Search y Delete se muestran a través del componente nativo ```Modal```. De igual manera, las respuestas que la App genera y la gestión de errores devueltos por la API son mostrados a través de este componente nativo. 
<br>
<br>
<hr>
<br>

### COMPONENTES:

- **homePage:** Ventana inicial de la App.
- **mainPage:** Ventana principal de la App.
- **userCard:** Bloque de visualización de información de usuario en la página principal.
- **listItem:** Cada bloque de usuario en la lista de usuarios de la página principal.
- **addUserModal:** Ventana modal con el formulario para agregar nuevo usuario.
- **deleteUserModal:** Ventana modal para la confirmación de eliminar usuario.
- **modifyUserModal:** Ventana modal con el formulario para modificar usuario.
- **searchUserModal:** Ventana modal con el formulario para buscar usuario.
- **responseUserModal:** Ventana modal para visualizar las respuestas generadas.
<br>
<br>

### SERVICIOS:

- **colorTheme:** Posibilidad de elegir color de tema de la App.
- **deleteUser:** Eliminar usuario de la DB.
- **formatDate:** Da formato a las fechas.
- **getData:** Obtiene lista de usuarios y añade información random a cada uno.
- **getExampleData:** Obtiene una lista de usuarios de ejemplo alojada en .data/exampleList.js en caso de no ser posible obtener los usuarios de la DB de INNOCV-Solutions.
- **postUser:** Añade nuevo usuario a la DB.
- **putUser:** Modifica usuario en la DB.
<br>
<br>
<hr>
<br>

### Tecnologías:

```React Native```<br>
```Javascript```<br>
```Dev: Expo, npm```
<br>
<br>


### Dependencias: 
```
"@react-native-community/datetimepicker": "3.2.0",
"@react-native-community/masked-view": "0.1.10",
"@react-navigation/native": "^5.9.4",
"@react-navigation/stack": "^5.14.5",
"expo": "~41.0.1",
"expo-status-bar": "~1.0.4",
"react": "16.13.1",
"react-dom": "16.13.1",
"react-native": "https://github.com/expo/react-native/archive/sdk-41.0.0.tar.gz",
"react-native-gesture-handler": "~1.10.2",
"react-native-reanimated": "~2.1.0",
"react-native-safe-area-context": "3.2.0",
"react-native-screens": "~3.0.0",
"react-native-web": "~0.13.12",
"react-navigation": "^4.4.4"
```