'use strict'
const Env = use('Env')
const Sentry = require('@sentry/node')

module.expots = {
  sentry: {
    dsn: Env.get('SENTRY_DSN'),
    integrations: [
    // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true })
    ],
    tracesSampleRate: 1.0
  }
}
