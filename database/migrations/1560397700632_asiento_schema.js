'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AsientoSchema extends Schema {
  up () {
    this.create('asientos', (table) => {
      table.increments()
      table.string('asiento', 4).notNullable()
    })
  }

  down () {
    this.drop('asientos')
  }
}

module.exports = AsientoSchema
