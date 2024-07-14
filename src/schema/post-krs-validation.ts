import { body } from "express-validator";

const schema = [
  body("id_mahasiswa")
    .isString()
    .withMessage("id_mahasiswa must be a string")
    .notEmpty()
    .withMessage("id_mahasiswa must not be empty"),
  body("id_matakuliah")
    .isString()
    .withMessage("id_matakuliah must be a string")
    .notEmpty()
    .withMessage("id_matakuliah must not be empty"),
];

export default schema;
