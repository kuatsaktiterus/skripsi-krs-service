import { param } from "express-validator";

const schema = [
  param("id_mahasiswa")
    .isString()
    .withMessage("id_mahasiswa must be a string")
    .notEmpty()
    .withMessage("id_mahasiswa must not be empty"),
];

export default schema;
