import { Schema, model, models } from "mongoose";

type userType = {
  name: string;
  phone: string;
  dateReserve: string;
  timeReserve: string;
  quantity: number;
  observations?: string;
};

const schema = new Schema < userType > ({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  dateReserve: { type: String, required: true },
  timeReserve: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  observations: { type: String, required:false},
});

const modelName = "clients";

export default models[modelName] || model < userType > (modelName, schema);