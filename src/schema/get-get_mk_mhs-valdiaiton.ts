import { query, param } from "express-validator";

const schema = [
  param("id_mahasiswa")
    .isString()
    .withMessage("id_mahasiswa must be a string")
    .notEmpty()
    .withMessage("id_mahasiswa must not be empty"),
  query("current_page")
    .isInt({ gt: 0 })
    .withMessage("current_page must be a integer")
    .notEmpty()
    .withMessage("current_page must not be empty"),
  query("per_page")
    .isInt({ gt: 0 })
    .withMessage("per_page must be a integer")
    .notEmpty()
    .withMessage("per_page must not be empty"),
];

export default schema;
