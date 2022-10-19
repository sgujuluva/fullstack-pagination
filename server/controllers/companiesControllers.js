import mongoose from "mongoose";
import Companies from "../models/companiesSchema.js"
//companies get controller

export const getCompaniesList = async(req,res) => {

    const getAllCompanies = await Companies.find();

    return res.status(200).json({message:"List of all companies", getAllCompanies})
}