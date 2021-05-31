'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Task = use('App/Models/Task')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.params
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ params, request, response, view }) {
    const tasks = await Task.query()
      .where(
        'project_id', params.projects_id
      )
      .with('user')
      .fetch()
    return tasks
  }

  /**
   * Create/save a new task.
   * POST tasks
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Response} ctx.params
   */
  async store ({ request, response, params }) {
    const data = request.only(['user_id', 'title', 'description', 'due_date', 'file_id'])

    const task = await Task.create({ ...data, project_id: params.projects_id })
    return response.status(200).send(task)
  }

  /**
   * Display a single task.
   * GET tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.params
   */
  async show ({ params }) {
    const task = await Task.findOrFail(params.id)

    await task.load('user')

    return task
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   *
   * @param {object} ctx
   * @param {Response} ctx.params
   * @param {Request} ctx.request
   */
  async update ({ params, request }) {
    const task = await Task.findOrFail(params.id)
    const data = request.only(['user_id', 'title', 'description', 'due_date', 'file_id'])

    task.merge(data)
    await task.save()
    return task
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.params
   */
  async destroy ({ params }) {
    const task = await Task.findOrFail(params.id)

    await task.delete()
  }
}

module.exports = TaskController
