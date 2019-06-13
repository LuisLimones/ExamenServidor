'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalaSchema extends Schema {
  up () {
    this.create('salas', (table) => {
      table.increments()
      table.integer('numero').notNullable()
    })
  }

  down () {
    this.drop('salas')
  }
}

module.exports = SalaSchema
