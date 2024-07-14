import { Response } from "express";

export class ResponseController {
  static response(res: Response, result: any) {
    return {
      code: res.statusCode,
      data: result
    }
  }
}
