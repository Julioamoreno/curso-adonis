'use strict'

class User {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      usename: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed'
    }
  }
}

module.exports = User
