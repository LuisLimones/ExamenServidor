'use strict'
const Pelicula = use('App/Models/Pelicula')
const Sala = use('App/Models/Sala')
const Funcion = use('App/Models/Funcion')
const Horario = use('App/Models/Horario')

class AdministrativoController {
    //Peliculas
    async obtenerPeliculas({response}){
        try {
            const peliculas = await Pelicula.all();
            console.log(peliculas);
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
            console.log('Llega update Pelicula');
            console.log(params.id);
            let pelicula= await Pelicula.find(params.id);
            console.log(pelicula);
            pelicula.titulo=request.input('titulo');
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
            return response.json(error);
        }
    }
    async nuevaSala(){}
    async deleteSala(){}

    //Funciones
    async obtenerFunciones({response}){
        try {
            const funciones= await Funcion.all();
            return response.json(funciones);
        } catch (error) {
            console.log(error);
            return response.json(error);
        }
    }
    async nuevaFuncion({reponse, request}){
        try {
            let funcion= request.input('funcion');
            console.log(funcion.pelicula_id);
            let horarios= request.input('horarios');
            const funcionNueva= await new Funcion();
            funcionNueva.pelicula_id=funcion.pelicula_id;
            funcionNueva.sala_id=funcion.sala_id;
            await funcionNueva.save();
            console.log(funcionNueva);
            console.log(horarios);
            for (let index = 0; index < horarios.length; index++) {
                const element = horarios[index];
                const horario= new Horario();
                horario.funcion_id=funcionNueva.id;
                horario.hora=element;
                await horario.save();
                console.log(horario);
                return response.json()
            }
        } catch (error) {
            console.log(error);
        }
    }
    async updateFuncion(){}
    async deleteFuncion(){}

    //Horarios
    async obtenerHorarios({response}){
        try {
            const horarios= await Horario.all();
            return response.json(horarios);
        } catch (error) {
            return response.json(error);
        }
    }
    async updateHorario(){}
    async deleteHorario(){}
}

module.exports = AdministrativoController
