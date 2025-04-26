import Superhero from "../models/superheroModel.js";
import IRepository from "./IRepository.js";

class SuperheroeRepository extends IRepository {
  
  async obtenerTodos() {
    return await Superhero.find({});
  };

  async obtenerPorId(id) {
    return await Superhero.findById(id);
  };

  async insertSuperheroe( nombreSuperHeroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos, creador ) {
    return await Superhero.insertOne( {
      nombreSuperHeroe,
      nombreReal,
      edad,
      planetaOrigen,
      debilidad,
      poderes,
      aliados,
      enemigos,
      creador
    });
  };

  async updateSuperheroe(idSuperheroe, superheroeActualizado) {
    const updateSuperheroeNew = await Superhero.findByIdAndUpdate(idSuperheroe, superheroeActualizado, {
      new: true,
    });
    if (!updateSuperheroeNew) return res.status(404).json({ message: "Superhero no found" });
    return updateSuperheroeNew
  };

  async deleteSuperheroeById(id) {
    const deleteSuperheroeId = await Superhero.findByIdAndDelete(id);
    if (!deleteSuperheroeId) return res.status(404).json({ message: "Superhero no found" });
    // return res.sendStatus(204);
    return deleteSuperheroeId;
  };

  async deleteSuperheroeByName(nombre) {
    const deleteSuperheroeName = await Superhero.findOneAndDelete({ nombreSuperHeroe: nombre });
    if (!deleteSuperheroeName) return res.status(404).json({ message: "Superhero no found" });
    // return res.sendStatus(204);
    return deleteSuperheroeName;
  };
}

export default new SuperheroeRepository();
