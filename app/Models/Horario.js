'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Horario extends Model {
    static get createdAtColumn(){
        return null
    }
    static get updatedAtColumn(){
        return null
    }
    funcion(){
        return this.belongsTo('App/Models/Funcion');
    }
    ticket(){
        return this.hasMany('App/Models/Ticket');
    }
}

module.exports = Horario
