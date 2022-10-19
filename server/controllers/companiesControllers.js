import Companies from "../models/companiesSchema.js";

//companies get all list companies
export const getCompaniesList = async (req, res) => {
  try {
    const getAllCompanies = await Companies.find({}).select(
      "name email_address products"
    );

    return res
      .status(200)
      .json({ message: "List of all companies", getAllCompanies });

  } catch (error) {
    return res.status(500).json({message:error.message});
  }
};
