import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize";

const Appartment = sequelize.define(
  "Appartment",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    type: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.DOUBLE,
    },
    ownerName: {
      type: DataTypes.STRING,
    },
    ownerPhone: {
      type: DataTypes.STRING,
    },
  },
  { hooks: {}, paranoid: true, timestamps: true, tableName: "appartments" }
);

export default Appartment;
