import { NextFunction, Request, Response } from "express";
import Appartment from "../models/Appartment";
import {
  AppartmentInterface,
  createAppartmentType,
} from "../interfaces/Appartment.interface";

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const appartments: AppartmentInterface[] = <AppartmentInterface[]>(
      await Appartment.findAll({})
    );

    return res.status(200).json({ appartments });
  } catch (error) {
    next(error);
  }
}

export async function findOne(req: Request, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;

    const appartment: AppartmentInterface = <AppartmentInterface>(
      await Appartment.findByPk(id)
    );
    if (!appartment)
      return res.status(404).json({ message: "Appartment Not Found" });
    return res.status(200).json({ appartment });
  } catch (error) {
    next(error);
  }
}

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const appartmentData = req.body;

    const createdAppartment: createAppartmentType = <createAppartmentType>(
      await Appartment.create(appartmentData)
    );

    return res.status(201).json({ createdAppartment });
  } catch (error) {
    next(error);
  }
}
