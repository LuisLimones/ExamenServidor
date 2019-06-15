'use strict'
const Usuario = use('App/Models/Usuario');

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with usuarios
 */
class UsuarioController {
  /**
   * Show a list of all usuarios.
   * GET usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    try {
      let usuarios = await Usuario.all();
      return response.json(usuarios);
    } catch (error) {
      return response.json(error);
    }
  }

  /**
   * Render a form to be used for creating a new usuario.
   * GET usuarios/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new usuario.
   * POST usuarios
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth }) {
    try {
      const usuario=new Usuario();
      usuario.nombre=request.input('nombre');
      usuario.contra=request.input('contra');
      //if(auth.getUser().rol=="Admin"){
        usuario.rol="Admin";
      //}
    // else{
      // usuario.rol="Usuario";
      //}
      await usuario.save();
      return response.json(usuario);
    } catch (error) {
      
    }
  }

  /**
   * Display a single usuario.
   * GET usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    try {
      let usuario= await Usuario.find(params.id);
      return response.json(usuario);
    } catch (error) {
      return response.json(error);
    }
  }

  /**
   * Render a form to update an existing usuario.
   * GET usuarios/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {

  }

  /**
   * Update usuario details.
   * PUT or PATCH usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    try {
      let usuario = await Usuario.find(params.id);
      usuario.nombre=request.input(nombre);
      usuario.contra=request.input(contra);
      await usuario.save();
      return response.json(usuario);
    } catch (error) {
      return response.json(error);
    }
  }

  /**
   * Delete a usuario with id.
   * DELETE usuarios/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    try {
      const usuario = await Usuario.find(params.id);
      await usuario.delete();
      return response.json({'mensaje': "Usuario Eliminado"});
    } catch (error) {
      return response.json(error);
    }
  }

  async login({request, response, auth}){
    try {
      const nombre = request.input('nombre');
      const contra = request.input('contra');
      let token=await auth.attempt(nombre, contra);
      if (token.token) {
        return response.json(token);
      } else {
        return response.json({'error': "Fallo token"});
      }
    } catch (error) {
      return response.json(error);
    }
  }
}

module.exports = UsuarioController
