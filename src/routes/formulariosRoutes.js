import express from 'express';
import { obtenerTodosLosSuperheroesController } from '../controllers/superheroController.js';



const routerFormulario = express.Router();

routerFormulario.get ('/', (req, res) => {
  res.render('index', { title: 'Página Principal' });
});

// Ruta para la pagina Acerca de
routerFormulario.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de Nosotros' });
});

// Ruta para la pagina de Contacto
routerFormulario.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contáctanos' });
});

// Ruta para la pagina de Agregar Superhéroe
routerFormulario.get('/superheroAdd', (req, res) => {
  res.render('superheroAdd', { title: 'Agregar Superhéroe' });
});

// Ruta para la pagina de Modificar Superhéroe
routerFormulario.get('/superheroEdit/:id', (req, res) => {
  res.render('superheroEdit', { title: 'Modificar Superhéroe' });
});

export default routerFormulario
