import express from "express";
import {
  obtenerTodosLosSuperheroesController,
  insertNewSuperheroController,
  updateSuperheroController,
  deleteSuperheroeByIdController,
  deleteSuperheroeByNameController,
} from "../controllers/superheroController.js";
import { shRegisterValidationRules } from "../middlewares/superheroesValidationRules.js";
import { handleValidationErrors } from "../middlewares/errorMiddleware.js";
import { modificarSuperheroeFormularioControllerEjs, obtenerTodosLosSuperheroesControllerEjs } from '../controllers/ejsController.js';

const router = express.Router();

router.get("/heroes/listar_todos", obtenerTodosLosSuperheroesController);
router.get("/heroes", obtenerTodosLosSuperheroesControllerEjs);

router.put("/heroes/heroe-update", updateSuperheroController);
router.delete('/heroes/delete-by-id/:id', deleteSuperheroeByIdController);
router.delete("/heroes/name/:nombre", deleteSuperheroeByNameController);

// Formularios
router.get('/formularios/hero-add', (req, res) => {
  res.render('superheroAdd'); 
});
router.get('/formularios/heroe-update/:id', modificarSuperheroeFormularioControllerEjs)

// Ruta para agregar un superhéroe con validación
router.post("/heroes/hero-add", shRegisterValidationRules(), handleValidationErrors, insertNewSuperheroController);

export default router;
