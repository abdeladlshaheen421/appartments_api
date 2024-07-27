import { body } from "express-validator";

// create and update validation middleware
export const validateAppartmentData = [
  body("name").isString().withMessage("please enter a valid Appartment name"),
  body("type")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("please enter a valid description"),
  body("description")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("please enter a valid description"),
  body("price").isDecimal().withMessage("please enter a valid Price"),
  body("ownerName")
    .isAlpha("en-US", { ignore: " " })
    .withMessage("please enter a valid Owner Name"),
  body("ownerPhone")
    .isMobilePhone("ar-EG")
    .withMessage("please enter a valid Phone Number"),
];
