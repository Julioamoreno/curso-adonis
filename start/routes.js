'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.get('files/:id', 'FileController.show')
  Route.post('files', 'FileController.store')

  Route.post('passwords', 'ForgotPasswordController.store')
  Route.put('passwords', 'ForgotPasswordController.update')
  Route.resource('projects', 'ProjectController').apiOnly()
}).middleware(['auth'])
