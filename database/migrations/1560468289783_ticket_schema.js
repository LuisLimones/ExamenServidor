'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.integer('usuario_id').references('id').inTable('usuarios')
      table.integer('horario_id').references('id').inTable('horarios')
      table.integer('asiento_id').references('id').inTable('asientos')
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketSchema
