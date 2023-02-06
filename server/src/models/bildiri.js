import { Schema, model } from "mongoose";

export const Deprem = model(
   "Deprem",
   new Schema({
         name_surname: { type: String, default: null },
         numberOfPeople: { 
            count:{
               type: Number, default: null
            },
            peoples:{ 
               type: String, default: null
            }
         },
         contact: { type: String, default: null },
         addres: { type: String, required: true },
         information: { type: String, default: null},
      },
      {
         timestamps: {
            createdAt: "created",
            updatedAt: "updated",
      },
   })
);