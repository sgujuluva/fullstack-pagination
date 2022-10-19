import express from "express";
import {getCompaniesList }from "../controllers/companiesControllers.js"

const router = express.Router();

//creating route
router.get("/list",getCompaniesList)

export default router