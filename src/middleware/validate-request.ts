import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import response from "../controller/controller";

export function validateRequestSchema(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    let error = errors.array().map((err) => {
      if (err.type === "field") {
        let fieldName = err.path;
        let fieldError = err.msg;
        return [fieldName, fieldError];
      }
    });

    let errObj = {};
    error.forEach((err?: Array<any>) => {
      errObj = { ...errObj, [err?.[0]]: [err?.[1]] };
    });

    return res.status(400).json(response.responseError(400, errObj));
  }
  next();
}
