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
    return res.status(500).json({ message: error.message });
  }
};

//sorting the companies name in ascending order
export const sortingCompanyName = async (req, res) => {
    const limit = Number(req.query.limit) || 50
  const sortName = await Companies.find().select("name").limit(limit).sort({ name: 1 }).lean();
  return res.status(200).json(sortName);
};
