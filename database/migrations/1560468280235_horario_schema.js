'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HorarioSchema extends Schema {
  up () {
    this.create('horarios', (table) => {
      table.increments()
      table.integer('funcion_id').references('id').inTable('funciones')
      table.float('hora', 2, 1).notNullable()
    })
  }

  down () {
    this.drop('horarios')
  }
}

module.exports = HorarioSchema
