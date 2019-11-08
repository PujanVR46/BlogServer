'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ResourceNotExistException extends LogicalException {
  handle (error,{response}) {
    return response.status(404).json({
      error:'Resource not exists'
    })
  }
}

module.exports = ResourceNotExistException
