'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FuncionSchema extends Schema {
  up () {
    this.create('funciones', (table) => {
      table.increments()
      table.integer('pelicula_id').references('id').inTable('peliculas')
      table.integer('sala_id').references('id').inTable('salas')
    })
  }

  down () {
    this.drop('funciones')
  }
}

module.exports = FuncionSchema
