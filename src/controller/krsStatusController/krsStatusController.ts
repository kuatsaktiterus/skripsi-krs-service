import { Request, Response } from "express";
import { KrsService } from "../../service/krs.service";
import { ResponseController } from "../reponse.controller";
import { ErrorHandler } from "../../error.handler";

export class KrsStatusController {
  static async changeStatusPerUser(req: Request, res: Response) {
    try {
      const result = await KrsService.changeStatusPerUser(req);
      return res.status(200).send(ResponseController.response(res, result))
    } catch (error: any) {
      return ErrorHandler.catch(res, error)
    }
  }

  static async changeStatusBatch(req: Request, res: Response) {
    try {
      const result = await KrsService.changeStatusBatch();
      return res.status(200).send(ResponseController.response(res, result))
    } catch (error: any) {
      return ErrorHandler.catch(res, error)
    }
  }
}
