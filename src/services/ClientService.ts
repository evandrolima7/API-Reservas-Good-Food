import  clients  from "../model/Agenda";

export const all = async () => { 
    return clients.find();
};

  export const findId = async (id: string) => {
    return await clients.findOne({_id: id});
  };

  export const addUser = async ( name: string, phone: string, dateReserve: string, timeReserve: string, quantity: number, observations: string) => {
    
    return await clients.create({
      name,
      phone,
      dateReserve,
      timeReserve,
      quantity,
      observations,
    });
  };
