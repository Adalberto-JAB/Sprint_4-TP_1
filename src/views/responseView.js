export function renderizarSuperheroe(superheroe) {
  return {
    id: superheroe._id,
    Nombre: superheroe.nombreSuperHeroe,
    "Nombre Real": superheroe.nombreReal,
    Edad: superheroe.edad,
    "Planeta de Origen": superheroe.planetaOrigen,
    Debilidad: superheroe.debilidad,
    Poderes: superheroe.poderes,
    Aliados: superheroe.aliados,
    Enemigos: superheroe.enemigos,
    "Agregado por": superheroe.creador,
  };
}

export function renderizarListaSuperheroes(superheroes) {
  return superheroes.map((superheroe) => renderizarSuperheroe(superheroe));
}

export const formatearArray = (textoArray = "") => {
  return textoArray
    .split(",")
    .map((elemento) => {
      return elemento.trim();
    })
    .filter((elemento) => {
      return elemento !== "";
    });
};
