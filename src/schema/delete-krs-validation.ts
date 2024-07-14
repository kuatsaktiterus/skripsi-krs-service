import { query } from "express-validator";

const schema = [
  query("id_krs")
    .isString()
    .withMessage("id_krs must be a string")
    .notEmpty()
    .withMessage("id_krs must not be empty"),
  query("id_mahasiswa")
    .isString()
    .withMessage("id_mahasiswa must be a string")
    .notEmpty()
    .withMessage("id_mahasiswa must not be empty"),
];

export default schema;
