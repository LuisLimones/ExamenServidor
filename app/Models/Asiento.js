'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Asiento extends Model {
    static get createdAtColumn(){
        return null
    }
    static get updatedAtColumn(){
        return null
    }
    ticket(){
        return this.hasMany('App/Models/Asiento')
    }
}

module.exports = Asiento
