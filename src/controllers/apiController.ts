import {Request, Response} from "express";
import  clients  from "../model/Agenda";

export const all = async (req: Request, res: Response) => {

  
   let reservations = await clients.find({})

   res.json({ reservations })
}

export const single = async (req: Request, res: Response) => {

  
  let {id} = req.params; 
  
  let reservations = await clients.findById(id)
 
 res.json({reservations})
}


export const add = async (req: Request, res: Response) => {
  
    const { name, phone, dateReserve, timeReserve, quantity, observations } = req.body;

    if (name && phone && dateReserve && timeReserve && quantity && observations) {

      const newReserve = await clients.create({
        name,
        phone,
        dateReserve,
        timeReserve,
        quantity,
        observations,
      });

      res.status(201).json({ newReserve });
    } else {
      res.status(400).json({ error: "Dados não enviados" })
  }
};

export const update = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

      let client = await clients.findById(id);
      if (!client) {
        res.status(404).json({ error: "Reserva não encontrada!" });
      }
  
      if (req.body.name) client.name = req.body.name;
      if (req.body.phone) client.phone = req.body.phone;
      if (req.body.dateReserve) client.dateReserve = req.body.dateReserve;
      if (req.body.timeReserve) client.timeReserve = req.body.timeReserve;
      if (req.body.quantity) client.quantity = req.body.quantity;
      if (req.body.observations) client.observations = req.body.observations;
  
      await client.save();
  
      res.json({ client });
    }
  
export const destroy = async (req: Request, res: Response) => {
  
  let {id} = req.params;
  
  let reserve = await clients.findById( id )
  
  if(reserve){
  await reserve.deleteOne()
  }
  
  res.json({})
}