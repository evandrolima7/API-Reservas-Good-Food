import { Schema, model, models } from "mongoose";

type userType = {
  name: string;
  email: string;
  password: string;
};

const schema = new Schema < userType > ({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true }
  
});

const modelName = "users";

export default models[modelName] || model < userType > (modelName, schema);