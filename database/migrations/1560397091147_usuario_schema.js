'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsuarioSchema extends Schema {
  up () {
    this.create('usuarios', (table) => {
      table.increments()
      table.string('nombre', 50).notNullable().unique()
      table.string('contra', 300).notNullable()
      table.string('rol', 15).notNullable()
    })
  }

  down () {
    this.drop('usuarios')
  }

  ticket(){
    return this.hasMany('App/Models/Ticket');
  }
}

module.exports = UsuarioSchema
