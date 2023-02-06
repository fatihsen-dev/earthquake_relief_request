import  {Deprem}  from "../models/bildiri.js"
import Joi from "joi"

export const index = async (req,res) => {
    return res.send(await Deprem.find().select("-__v"));
}


export const create = async (req,res) => {
    const {error} = Joi.object({
        name_surname: Joi.string(),
        numberOfPeople: Joi.object(),
        contact: Joi.string(),
        addres: Joi.string().required(),
        information: Joi.string(),
     }).validate(req.body)
     if (error){
        return res.status(400).send({message: error.details[0].message});
     }
     const data = await Deprem.create({
        ...req.body
     })
     return res.send(data);
}








