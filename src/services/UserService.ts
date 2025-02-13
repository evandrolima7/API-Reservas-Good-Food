import User from "../model/User";
import bcrypt from "bcrypt";

export const createUser = async (name: string, email:string, password:string) => {
  let hasUser = await User.findOne({email});
  
  if(!hasUser){
    const hash = bcrypt.hashSync(password, 10)
   
    const newUser = await User.create({
      name,
      email,
      password: hash
    })
    return newUser;
  } else {
    return new Error("Email já existe.")
  }
};

export const findByEmail = async (email: string) => {
  return await User.findOne({email});
};

export const matchPassword = async (passwordText: string, encrypted: string) => {
    return bcrypt.compare(passwordText, encrypted); 
  };

export const all = async () => {
  return User.find()
};