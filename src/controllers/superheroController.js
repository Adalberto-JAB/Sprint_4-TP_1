import {
  obtenerTodosLosSuperheroes,
  insertNewSuperheroe,
  updateSuperheroe,
  deleteSuperheroeById,
  deleteSuperheroeByName,
} from "../services/superheroService.js";

import {
  renderizarSuperheroe,
  renderizarListaSuperheroes,
} from "../views/responseView.js";

export async function obtenerTodosLosSuperheroesController(req, res) {
  try {
    const superheroes = await obtenerTodosLosSuperheroes();
    // console.log(typeof superheroes);

    const superheroesFormateados = renderizarListaSuperheroes(superheroes);
    const titulo_pagina= 'Listar Superhéroes'
    res.render("superheroListAll", { superheroesFormateados, title: titulo_pagina });
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener los superhéroes",
      error: error.message,
    });
  }
}

export async function obtenerSuperheroePorIdController(req, res) {
  try {
    const { id } = req.params;
    const superheroe = await obtenerSuperheroePorId(id);
    if (!superheroe) {
      return res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }

    const superheroeFormateado = renderizarSuperheroe(superheroe);
    res.status(200).json(superheroeFormateado);
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener el superhéroe",
      error: error.message,
    });
  }
}

export async function insertNewSuperheroController(req, res) {
  try {
    const {
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen,
      debilidad,
      poderes,
      aliados,
      enemigos,
      creador,
    } = req.body;

    const superheroeFormateado = await insertNewSuperheroe(
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen,
      debilidad,
      poderes,
      aliados,
      enemigos,
      creador
    );

    res.redirect('/api/heroes/listar_todos'); 

  } catch (error) {
    res.status(500).send({
      mensaje: "Error al insertar el nuevo superhéroe",
      error: error.message,
    });
  }
}

export async function updateSuperheroController(req, res) {
  try {
    const superheroeActualizado = req.body;

    await updateSuperheroe( superheroeActualizado.id, superheroeActualizado );

    res.redirect('/api/heroes/listar_todos');
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al actualizar el superhéroe",
      error: error.message,
    });
  }
}

export async function deleteSuperheroeByIdController(req, res) {
  try {
    const { id } = req.params;
    const superheroe = await deleteSuperheroeById(id);
    if (!superheroe) {
      return res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }

    res.redirect('/api/heroes/listar_todos');
    // const superheroeFormateado = renderizarSuperheroe(superheroe);
    // res.status(200).json(superheroeFormateado);
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener el superhéroe",
      error: error.message,
    });
  }
}

export async function deleteSuperheroeByNameController(req, res) {
  try {
    const { nombre } = req.params;
    const superheroe = await deleteSuperheroeByName(nombre);
    if (!superheroe) {
      return res.status(404).send({ mensaje: "Superhéroe no encontrado" });
    }

    const superheroeFormateado = renderizarSuperheroe(superheroe);
    res.status(200).json(superheroeFormateado);
  } catch (error) {
    res.status(500).send({
      mensaje: "Error al obtener el superhéroe",
      error: error.message,
    });
  }
}
