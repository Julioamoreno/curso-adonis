'use strict'

const Env = use('Env')

module.exports = {

  connection: Env.get('MAIL_CONNECTION', 'smtp'),
  smtp: {
    driver: 'smtp',
    pool: true,
    port: Env.get('MAIL_PORT', 2525),
    host: Env.get('MAIL_HOST'),
    secure: false,
    auth: {
      user: Env.get('MAIL_USERNAME'),
      pass: Env.get('MAIL_PASSWORD')
    },
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10
  },

  sparkpost: {
    driver: 'sparkpost',
    apiKey: Env.get('SPARKPOST_API_KEY'),
    extras: {}
  }
}
