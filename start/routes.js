'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
//Rutas de Usuarios
Route.get('/usuarios/todos', 'UsuarioController.index')
Route.get('/usuarios/:id', 'UsuarioController.show')
Route.put('/usuarios/actualizar/:id', 'UsuarioController.update')
Route.delete('/usuarios/eliminar/:id', 'UsuarioController.destroy')
Route.post('/usuarios/agregarUsuario', 'UsuarioController.store')
Route.post('/usuarios/login', 'UsuarioController.login')
Route.post('/usuarios/rol', 'UsuarioController.rol')

//Rutas de Administrativo
//Peliculas
Route.get('/administrativo/peliculas/todas', 'AdministrativoController.obtenerPeliculas')
Route.get('/administrativo/peliculas/:id', 'AdministrativoController.obtenerPelicula')
Route.post('/administrativo/peliculas/nueva', 'AdministrativoController.nuevaPelicula')
Route.put('/administrativo/peliculas/actualizar/:id', 'AdministrativoController.updatePelicula')
//Salas
Route.get('/administrativo/salas', 'AdministrativoController.obtenerSalas')
//Funciones
Route.get('/administrativo/funciones/todas', 'AdministrativoController.obtenerFunciones');
Route.post('/administrativo/funciones/nueva', 'AdministrativoController.nuevaFuncion')
//Horarios
Route.get('/administrativo/horarios/todos', 'AdministrativoController.obtenerHorarios')

//Rutas de Taquilla

//Rutas para llenar sala y asientos
Route.get('/llenar', 'AsientoController.llenar')
Route.get('/llenarSalas', 'AsientoController.llenarSala')
