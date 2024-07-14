import { query, param, body } from "express-validator";

const schemaQuery = [
  query("id_mahasiswa")
    .isString()
    .withMessage("id_mahasiswa must be a string")
    .notEmpty()
    .withMessage("id_mahasiswa must not be empty"),
];

const schemaParam = [
  param("id_mahasiswa")
    .isString()
    .withMessage("id_mahasiswa must be a string")
    .notEmpty()
    .withMessage("id_mahasiswa must not be empty"),
];

const schemaBody = [
  body("id_mahasiswa")
    .isString()
    .withMessage("id_mahasiswa must be a string")
    .notEmpty()
    .withMessage("id_mahasiswa must not be empty"),
];

export default { schemaQuery, schemaParam, schemaBody };
