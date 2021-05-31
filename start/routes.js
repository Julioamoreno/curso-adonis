'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
/** @type {typeof import('@adonisjs/validator/src/Validator')} */
const Route = use('Route')
Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store').validator('Session')

Route.group(() => {
  Route.get('files/:id', 'FileController.show')
  Route.post('files', 'FileController.store')

  Route.post('passwords', 'ForgotPasswordController.store').validator('ForgotPassword')
  Route.put('passwords', 'ForgotPasswordController.update').validator('ResetPassword')
  Route.resource('projects', 'ProjectController')
    .apiOnly()
    .validator(new Map(
      [
        [
          ['projects.store'],
          ['Project']
        ]
      ]
    ))
  Route.resource('projects.tasks', 'TaskController').apiOnly().validator(new Map(
    [
      [
        ['projects.tasks.store'],
        ['Task']
      ]
    ]
  ))
}).middleware(['auth'])
