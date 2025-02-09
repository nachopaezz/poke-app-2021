# Poke App

<p align="left">
  <img height="150" src="./pokemon.png" />
</p>


## Comenzando

### 1. **Forkear** el repo
Crea una copia del repositorio en tu cuenta.

### 2. **Clonar** el repositorio
Clona el repositorio en tu computadora para comenzar a trabajar.

El proyecto incluye un **boilerplate** con la estructura general tanto del servidor como del cliente.

### Requisitos previos
Es necesario contar al menos con la última versión estable de **Node** y **NPM** para poder instalar correctamente las dependencias.

#### Versiones requeridas:
- **Node**: 12.18.3 o mayor
- **NPM**: 6.14.16 o mayor

Verifica las versiones instaladas con los siguientes comandos:

```bash
node -v
npm -v
```

## Boilerplate

El boilerplate incluye dos carpetas:
- **`api`**: Código del backend.
- **`client`**: Código del frontend (creado con Create React App).

### Configuración de la base de datos
1. En la carpeta `api`, crea un archivo llamado `.env` con el siguiente contenido:

   ```
   DB_USER=usuariodepostgres
   DB_PASSWORD=passwordDePostgres
   DB_HOST=localhost
   ```

2. Reemplaza `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectar con **Postgres**.

3. Crea una base de datos llamada `pokemon` en **psql**.

## Enunciado

### Objetivo
Crear una aplicación en la cual puedas ver, buscar, filtrar y crear nuevos Pokémon utilizando la API externa [PokeAPI](https://pokeapi.co/).

### Funcionalidades a Implementar
- Buscar pokemons.
- Filtrarlos y ordenarlos.
- Crear nuevos pokemons.


### Endpoints Permitidos

- `GET https://pokeapi.co/api/v2/pokemon`
- `GET https://pokeapi.co/api/v2/pokemon/{id}`
- `GET https://pokeapi.co/api/v2/pokemon/{name}`
- `GET https://pokeapi.co/api/v2/type`

### Requerimientos Mínimos

#### Tecnologías:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

1. **Página Inicial**: Crear una landing page con:
   - Imagen representativa del proyecto.
   - Botón para ingresar al home.

2. **Ruta Principal**:
   - Input de búsqueda para encontrar Pokémon por nombre (búsqueda exacta).
   - Área de listado con los primeros resultados, mostrando imagen, nombre y tipos.
   - Botones para filtrar por tipo y por creación.
   - Botones para ordenar alfabéticamente y por fuerza.
   - Paginado de 12 pokemons por página (mostrar primeros 9 en la primera página)..

3. **Ruta de Detalle de Pokémon**:
   - Mostrar los mismos campos de la ruta principal.
   - ID de Pokémon, estadísticas (vida, fuerza, defensa, velocidad).
   - Altura y peso.

4. **Ruta de Creación**:
   - Formulario controlado con los campos del detalle de Pokémon.
   - Opción para seleccionar varios tipos.
   - Botón para crear un nuevo Pokémon.

#### Base de Datos

- **Pokemon**:
  - ID (número único, no debe coincidir con un ID de la API).
  - Nombre.
  - Vida, Fuerza, Defensa, Velocidad, Altura, Peso.

- **Tipo**:
  - ID.
  - Nombre.

La relación entre Pokémon y Tipos debe ser de muchos a muchos.

> **IMPORTANTE**: Asegúrate de diferenciar entre Pokémon existentes en la API y los creados por el usuario.

#### Backend

El servidor debe incluir las siguientes rutas:

1. **`GET /pokemons`**:
   - Obtener lista de Pokémon desde PokeAPI.
   - Devolver solo los datos necesarios para la ruta principal.

2. **`GET /pokemons/{idPokemon}`**:
   - Obtener detalle de un Pokémon (de PokeAPI o creado por el usuario).

3. **`GET /pokemons?name="..."`**:
   - Buscar Pokémon por nombre (exacto).

4. **`POST /pokemons`**:
   - Recibir datos desde el formulario de creación y crear un nuevo Pokémon en la base de datos.

5. **`GET /types`**:
   - Obtener y almacenar todos los tipos de Pokémon desde PokeAPI.
