import { Router } from "express";
import verifyUser from "../middleware/verify-user";
import verifyAdmin from "../middleware/verify-admin";
import idMahasiswaSchema from "../schema/id_mahasiswa-validation";
import postKrsSchema from "../schema/post-krs-validation";
import deleteKrsSchema from "../schema/delete-krs-validation";
import getMkMhsSchema from "../schema/get-get_mk_mhs-valdiaiton";
import { validateRequestSchema } from "../middleware/validate-request";
import { KrsController } from "../controller/krsController/krsController";
import { KrsStatusController } from "../controller/krsStatusController/krsStatusController";

const ROUTER = Router();

// to check if krs is active
ROUTER.get("/krs", KrsController.checkKrsActive);

/**
 * krs controller
 */
ROUTER.get(
  "/krs/:id_mahasiswa",
  verifyUser,
  idMahasiswaSchema.schemaParam,
  validateRequestSchema,
  KrsController.get
);

ROUTER.post(
  "/krs",
  verifyUser,
  postKrsSchema,
  validateRequestSchema,
  KrsController.post
);

ROUTER.delete(
  "/krs",
  verifyUser,
  deleteKrsSchema,
  validateRequestSchema,
  KrsController.delete
);

// get mata kuliah for mahasiswa
ROUTER.get(
  "/krs/mata-kuliah/:id_mahasiswa",
  verifyUser,
  getMkMhsSchema,
  validateRequestSchema,
  KrsController.getMkMhs
);

/**
 * krs status change
 */

// change status only for one of mahasiswa
ROUTER.patch(
  "/krs/status/mahasiswa",
  verifyAdmin,
  idMahasiswaSchema.schemaBody,
  validateRequestSchema,
  KrsStatusController.changeStatusPerUser
);

// change status all mahasiswa that krs is off
ROUTER.patch(
  "/krs/status/all",
  verifyAdmin,
  KrsStatusController.changeStatusBatch
);
export default ROUTER;
