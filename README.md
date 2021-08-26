# Proyecto final del Skill Factory de Avalith

Esta es la parte de NodeJS del proyecto final del Skill Factory.

## Descripcion

Esta API que permite registar usuarios y hacer login, que si es correcto devuelve un Token. Tambien se conecta con una base de datos MySQL y permite traer una lista de todas las peliculas o solo de las peliculas favoritas del usuario logeado, agregar y quitar peliculas de favoritos. Si el usuario es administrador, tambien permite agregar y editar peliculas.

## Ednpoints

### Users

- POST "/login ": Realiza una comprobacion de los datos recibidos (username,password) y devuelve un Token con la informacion del usuario.
- POST "/register": Crea un nuevo usuario con los datos recibidos (full_name, username, password, role)

### Movies

- GET "/movies": Obtiene una lista de todas las peliculas.
- POST "/movies": Agrega una pelicula a la base de datos con los datos recibidos (name,description,cover_img).
- PUT "/movies/:id": Edita los datos de una pelicula segun su ID.

### Favorite Movies

- GET "/favs": Obtiene una lista de las peliculas favotitas del usuario logueado
- POST "/favs": Agrega una pelicula a la lista de favoritos del usuario logueado
- DELETE "/favs": Elimina una pelicula de la lista de favoritos del usuario logueado

## Instalacion

- Clonar el proyecto usando `git clone https://github.com/luca-nastar/SkillFactory-final-node`.
- Importar la base de datos que esta en la carpeta "Database".
- Crear archivo .env apartir del archivo ".envExample".
- Ejecutar `npm install` o `yarn` en la carpeta del proyecto.
- Ejecutar `npm start` o `node` en la terminal.
