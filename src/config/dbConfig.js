import mongoose from "mongoose";

// Conetar a la base de datos
export async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js');
    console.log('Conexión exitosa a MongoDB.');
  } catch (error) {
    console.error('Error al conectar a MongoDB');
    process.exit(1);
  };
};

