'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PeliculaSchema extends Schema {
  up () {
    this.create('peliculas', (table) => {
      table.increments()
      table.string('titulo', 50).notNullable()
      table.string('clasificacion', 10).notNullable()
      table.string('genero', 30).notNullable()
      table.integer('duracion').notNullable()
      table.integer('duracion_funcion').notNullable()
    })
  }

  down () {
    this.drop('peliculas')
  }
}

module.exports = PeliculaSchema
