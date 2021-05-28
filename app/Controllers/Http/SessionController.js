'use strict'

class SessionController {
  async store ({ request, auth }) {
    const { email, password } = request.all()

    const { token } = await auth.attempt(email, password)
    return { email, token }
  }
}

module.exports = SessionController
