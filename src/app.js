import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';//
import express from 'express';
import expressLayouts from 'express-ejs-layouts';
import methodOverride from 'method-override';
import path from 'path';
import { connectDB } from "./config/dbConfig.js";
import superheroRoutes from "./routes/superheroRoutes.js";
import formsSuperhero from "./routes/formulariosRoutes.js"

// Instanciar express
const app = express();
const PORT = process.env.PORT || 3000;

/*
const __filename = fileURLToPath(import.meta.url); // Obtener la ruta resuelta al archivo
const __dirname = path.dirname(__filename); // Obtener el nombre del directorio
*/

/*
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // ajustar ruta

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // Archivo base de layout

// Servidor archivos estáticos
app.use(express.static(path.resolve('./public')));

// Ruta principal
app.get ('/', (req, res) => {
  res.render('index', { title: 'Página Principal' });
});
*/


// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.resolve('./src/views'));

// Configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // Archivo base de layout

// Servidor archivos estáticos
app.use(express.static(path.resolve('./src/public')));

// Ruta principal
app.get ('/', (req, res) => {
  res.render('index', { title: 'Página Principal' });
});

/*
// Ruta para la pagina Acerca de
app.get('/about', (req, res) => {
  res.render('about', { title: 'Acerca de Nosotros' });
});

// Ruta para la pagina de Contacto
app.get('/contact', (req, res) => {
  res.render('contact', { title: 'Contáctanos' });
});
*/

// Middlewares para procesar datos de formulario
app.use(bodyParser.urlencoded({ extended: true })); // Para formularios URL-encoded
app.use(express.json());
app.use(methodOverride('_method')); // Middleware para usar PUT o DELETE desde formularios

// conexión a mongoDB
connectDB();

// Configuración de rutas
app.use('/api', superheroRoutes);
app.use('/superheroes', formsSuperhero);

// manejo de errores para rutas no encontradas
app.use( (req, res) => res.status(404).send({ mensaje: "Ruta no encontrada" }));

// Iniciar sv
app.listen( PORT, () => {
    console.log( `Servidor escuchando en el puerto ${PORT}` );
});

