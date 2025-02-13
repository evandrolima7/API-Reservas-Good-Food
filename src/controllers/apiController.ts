import {Request, Response} from "express";
import dotenv from "dotenv";
import  {generateToken}  from "../config/passport";
import * as UserService from "../services/UserService";
import * as ClientService from "../services/ClientService";

dotenv.config();

export const all = async (req: Request, res: Response) => {

  
  let reservations = await ClientService.all();

  res.json({ reservations })
}

export const single = async (req: Request, res: Response) => {

  
  let {id} = req.params; 
  
  let reservations = await ClientService.findId(id);
 
 res.json({reservations})
}


export const add = async (req: Request, res: Response) => {
  
    const { name, phone, dateReserve, timeReserve, quantity, observations } = req.body;

    if (name && phone && dateReserve && timeReserve && quantity && observations) {

      const newReserve = await ClientService.addUser(name, phone, dateReserve, timeReserve, quantity, observations);

      res.status(201).json({ newReserve });
    } else {
      res.status(400).json({ error: "Dados não enviados" })
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  
  let client = await ClientService.findId(id);
  if (!client) {
    res.status(404).json({ error: "Reserva não encontrada!" });
    return
  }

  const updatedFields = req.body;

  Object.keys(updatedFields).forEach(field => {
    if (updatedFields[field]) {
      client[field] = updatedFields[field];
    }
  });

  try {
    await client.save();
    res.json({ client });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar reserva" });
  }
};
  
export const destroy = async (req: Request, res: Response) => {
  
  let {id} = req.params;
  
  let reserve = await ClientService.findId(id);
  
  if(reserve){
  await reserve.deleteOne()
  }
  
  res.json({})
}

export const register = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password } = req.body;

  try {
    let newUser = await UserService.createUser(name, email, password);

    if (newUser instanceof Error) {
      res.status(400).json({ error: newUser.message }); 
      return
    }

    const token = generateToken({ id: newUser._id }); 
    res.status(201).json({ id: newUser._id, token }); 
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};
export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    let user = await UserService.findByEmail(email);

    if (!user) {
      res.status(404).json({ error: "Usuário não encontrado" });
      return 
    }

    const isPasswordValid = await UserService.matchPassword(password, user.password);
    
    if (!isPasswordValid) {
      res.status(401).json({ error: "Credenciais inválidas" });
      return 
    }

    const token = generateToken({ id: user._id });
    res.json({ status: true, token });
  } catch (error) {
    res.status(500).json({ error: "Erro no servidor" });
  }
};

export const list = async (req: Request, res: Response) => {

let users = await UserService.all();

const list = users.map(user => user.email)

res.json({list})
}