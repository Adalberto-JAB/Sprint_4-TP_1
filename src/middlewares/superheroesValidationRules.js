import { body } from "express-validator";
import { formatearArray } from "../views/responseView.js";

export const shRegisterValidationRules = () => [
  body("nombreSuperHeroe")
    .trim()
    .notEmpty()
    .withMessage("El nombre del superhéroe es obligatorio.")
    .isLength({ min: 3, max: 60 })
    .withMessage(
      "El nombre del superhéroe debe tener entre 3 y 60 caracteres."
    ),

  body("nombreReal")
    .trim()
    .notEmpty()
    .withMessage("Nombre Real es obligatorio.")
    .isLength({ min: 3, max: 60 })
    .withMessage("Nombre real debe tener entre 3 y 60 caracteres"),

  body("edad")
    .trim()
    .notEmpty()
    .withMessage("Edad es obligatoria.")
    .isInt({ min: 1 })
    .withMessage("La edad debe ser mayor a cero"),

  body("planetaOrigen")
    .trim()
    .notEmpty()
    .withMessage("Planeta de origen es obligatorio.")
    .isLength({ min: 3, max: 60 })
    .withMessage("Nombre real debe tener entre 3 y 60 caracteres"),

  body("debilidad")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ min: 3, max: 60 })
    .withMessage(
      "Ingrese debilidad de superhéroe válido con una longitud entre 3 y 60 caracteres."
    ),

  body("poderes")
    .optional()
    .customSanitizer(formatearArray)
    .custom((poderes) => {
      if (poderes.length === 0) {
        throw new Error(
          'El campo "poderes" debe contener por lo menos un poder.'
        );
      }
      const poderesLimpios = poderes.map((poder) => poder.trim());
      for (const poder of poderesLimpios) {
        if (
          typeof poder !== "string" ||
          poder.length < 3 ||
          poder.length > 60
        ) {
          throw new Error(
            "Cada poder debe ser una cadena de texto con una longitud entre 3 y 60 caracteres."
          );
        }
      }
      return true;
    }),

  body("aliados")
    .optional()
    .customSanitizer(formatearArray)
    .custom((aliados) => {
      if (aliados.length === 0) {
        throw new Error(
          'El campo "aliados" debe contener por lo menos un aliado.'
        );
      }

      const aliadosLimpios = aliados.map((aliado) => aliado.trim());

      for (const aliado of aliadosLimpios) {
        if (
          typeof aliado !== "string" ||
          aliado.length < 3 ||
          aliado.length > 60
        ) {
          throw new Error(
            "Cada aliado debe ser una cadena de texto con una longitud entre 3 y 60 caracteres."
          );
        }
      }

      return true;
    }),

  body("enemigos")
    .optional()
    .customSanitizer(formatearArray)
    .custom((enemigos) => {
      if (enemigos.length === 0) {
        throw new Error(
          'El campo "enemigos" debe contener por lo menos un enemigo.'
        );
      }

      const enemigosLimpios = enemigos.map((enemigo) => enemigo.trim());

      for (const enemigo of enemigosLimpios) {
        if (
          typeof enemigo !== "string" ||
          enemigo.length < 3 ||
          enemigo.length > 60
        ) {
          throw new Error(
            "Cada enemigo debe ser una cadena de texto con una longitud entre 3 y 60 caracteres."
          );
        }
      }
      return true;
    }),

  body("creador")
    .notEmpty()
    .withMessage("Campo 'creador' obligatorio.")
    .trim()
    .isLength({ min: 3, max: 60 })
    .withMessage(
      "Ingrese creador de superhéroe válido con una longitud entre 3 y 60 caracteres."
    ),
];
