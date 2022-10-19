import express from "express";
import {getCompaniesList, sortingCompanyName }from "../controllers/companiesControllers.js"

const router = express.Router();

//getting list of companies
router.get("/list",getCompaniesList)

//sorting the companies name
router.get("/sort",sortingCompanyName )

export default router