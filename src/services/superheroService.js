import superheroeRepository from "../repositories/superheroRepository.js";

export async function obtenerTodosLosSuperheroes() {
  return await superheroeRepository.obtenerTodos();
}

export async function obtenerSuperheroePorId(id) {
  return await superheroeRepository.obtenerPorId(id);
}

export const insertNewSuperheroe = async ( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador ) => {
  return await superheroeRepository.insertSuperheroe( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador )
}

export async function updateSuperheroe(idSuperheroe, superheroeActualizado) {
  return await superheroeRepository.updateSuperheroe(idSuperheroe, superheroeActualizado)
}

export async function deleteSuperheroeById(id) {
  return await superheroeRepository.deleteSuperheroeById(id)
}

export async function deleteSuperheroeByName(nombre) {
  return await superheroeRepository.deleteSuperheroeByName(nombre)
}