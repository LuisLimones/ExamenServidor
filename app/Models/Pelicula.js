'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pelicula extends Model {
    static get createdAtColumn(){
        return null
    }
    static get updatedAtColumn(){
        return null
    }
    funcion(){
        return this.hasMany('App/Models/Funcion');
    }
}

module.exports = Pelicula
