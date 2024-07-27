import { Application } from "express";
import { create, findAll, findOne } from "../controllers/Appartment.controller";
import { validateAppartmentData } from "../validations/appartment.validations";
import { validateMiddleware } from "../middlewares/general.middlewares";

const AppartmentRouter = (app: Application) => {
  app.get("/appartments", findAll);

  app.get("/appartments/:id", findOne);

  app.post("/appartments", validateAppartmentData, validateMiddleware, create);
};

export default AppartmentRouter;
