'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Funcion extends Model {
    static get table(){
        return 'funciones';
    }
    static get createdAtColumn(){
        return null;
    }
    static get updatedAtColumn(){
        return null;
    }
    pelicula(){
        return this.belongsTo('App/Models/Pelicula');
    }
    sala(){
        return this.belongsTo('App/Models/Sala');
    }
    horario(){
        return this.hasMany('App/Models/Horario');
    }
}

module.exports = Funcion
