import mongoose from "mongoose";
/*
import dotenv from "dotenv";

dotenv.config({path: '.env'});
*/

const uri = process.env.MONGO_URI ||'mongodb+srv://Grupo-04:grupo04@cursadanodejs.ls9ii.mongodb.net/Node-js'

const connectDB = async () => {
  try {
    await mongoose.connect(uri)
    console.log('Conexión exitosa a MongoDB.');
    // console.log('Conexión exitosa en:', uri)
  } catch (error) {
    console.log('Error al conectarse', error)
    process.exit(1)
  }
}

export default connectDB



/*
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

*/