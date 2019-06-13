'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {
    static get createdAtColumn(){
        return null
    }
    static get updatedAtColumn(){
        return null
    }
    usuario(){
        return this.belongsTo('App/Models/Usuario');
    }
    horario(){
        return this.belongsTo('App/Models/Horario');
    }
    asiento(){
        return this.belongsTo('App/Models/Asiento');
    }
}

module.exports = Ticket
