'use strict'
const Pelicula = use('App/Models/Pelicula')
const Sala = use('App/Models/Sala')
const Funcion = use('App/Models/Funcion')
const Horario = use('App/Models/Horario')

class AdministrativoController {
    //Peliculas
    async obtenerPeliculas({response}){
        try {
            let peliculas=await Pelicula.all();
            return response.json(peliculas);
        } catch (error) {
            return response.json(error);
        }
    }
    async obtenerPelicula({params, response}){
        try {
            let pelicula= await Pelicula.find(params.id);
            return response.json(pelicula);
        } catch (error) {
            return response.json(error);
        }
    }
    async nuevaPelicula({request, response}){
        try {
            const pelicula=new Pelicula();
            pelicula.titulo=request.input('titulo');
            pelicula.clasificacion=request.input('clasificacion');
            pelicula.genero=request.input('genero');
            pelicula.duracion=request.input('duracion');
            pelicula.status=request.input('status');
            await pelicula.save();
            return response.json(pelicula);
        } catch (error) {
            console.log(error);
        }
    }
    async updatePelicula({params, request, response}){
        try {
            let pelicula= await Pelicula.find(params.id);
            pelicula.titulo=input.get('titulo')
            pelicula.clasificacion=request.input('clasificacion');
            pelicula.genero=request.input('genero');
            pelicula.duracion=request.input('duracion');
            pelicula.status=request.input('status');
            await pelicula.save();
            return response.json(pelicula);
        } catch (error) {
            return response.json(error);
        }
    }
    async deletePelicula(){}

    //Salas
    async obtenerSalas({response}){
        try {
            const salas= await Sala.all();
            return response.json(salas);
        } catch (error) {
            
        }
    }
    async nuevaSala(){}
    async deleteSala(){}

    //Funciones
    async obtenerFunciones(){}
    async nuevaFuncion(){}
    async updateFuncion(){}
    async deleteFuncion(){}

    //Horarios
    async obtenerHorarios(){}
    async nuevoHorario(){}
    async updateHorario(){}
    async deleteHorario(){}
}

module.exports = AdministrativoController
