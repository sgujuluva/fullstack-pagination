import express from "express";
import {getCompaniesList, sortingCompanyName, listingWithSkip}from "../controllers/companiesControllers.js"

const router = express.Router();

//getting list of companies
router.get("/list",getCompaniesList)

//sorting the companies name
router.get("/sort",sortingCompanyName )

//skip with limit
router.get("/skip-list",listingWithSkip)
export default router