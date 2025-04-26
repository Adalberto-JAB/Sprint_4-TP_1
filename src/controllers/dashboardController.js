import { borrarSuperheroeIDController, updateSuperheroController } from "./superheroController.js";

console.log("Conexión exitosa");

const editButton = document.getElementById('edit-button');
const deleteButton = document.getElementById('delete-button');

const heroeID = editButton.getAttribute('data-id');

editButton.addEventListener('click', async () => {
    try {
        await updateSuperheroController( heroeID )
    } catch (error) {
        console.error(error);
    }
});

deleteButton.addEventListener('click', async () => {
    const decision = confirm(`¿Estás seguro que deseas eliminar este superhéroe?`);
    if (decision) {
        try {
            await borrarSuperheroeIDController( heroeID )
        } catch (error) {
            console.error(error);
        }
    } else {
        return;
    }
});