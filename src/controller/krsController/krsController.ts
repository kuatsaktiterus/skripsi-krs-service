import { Prisma } from "@prisma/client";
import { prisma } from "../../lib/prisma-client";
import getMataKuliahKrsService from "../../service/get-matakuliah-krs-service";
import { Request, Response } from "express";
import Controller from "../controller";
import { KrsService } from "../../service/krs.service";
import { ResponseController } from "../reponse.controller";
import { ErrorHandler } from "../../error.handler";

export class KrsController {
  static async get(req: Request, res: Response) {
    try {
      const result = await KrsService.get(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error)
    }
  }

  static async post(req: Request, res: Response) {
    try {
      const result = await KrsService.post(req);
      return res.status(201).send(ResponseController.response(res, result));
    } catch (error: any) {
      if (error.cause == 400) return ErrorHandler.catch(res, error, error.message, 400)
      return ErrorHandler.catch(res, error)
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const result = await KrsService.delete(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error)
    }
  }

  static async getMkMhs(req: Request, res: Response) {
    try {
      const result = await KrsService.getMkMhs(req);
      return res.status(200).send(ResponseController.response(res, result));
    } catch (error: any) {
      return ErrorHandler.catch(res, error)
    }
  }

  static async checkKrsActive(req: Request, res: Response) {
    return res.status(200).send(Controller.response(200, true));
  }
}
