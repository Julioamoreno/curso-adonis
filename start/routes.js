'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
/** @type {typeof import('@adonisjs/validator/src/Validator')} */
const Route = use('Route')
Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store')

Route.group(() => {
  Route.get('files/:id', 'FileController.show')
  Route.post('files', 'FileController.store')

  Route.post('passwords', 'ForgotPasswordController.store')
  Route.put('passwords', 'ForgotPasswordController.update')
  Route.resource('projects', 'ProjectController').apiOnly()
  Route.resource('projects.tasks', 'TaskController').apiOnly()
}).middleware(['auth'])
