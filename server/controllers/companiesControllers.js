import Companies from "../models/companiesSchema.js";

//companies get all list companies
export const getCompaniesList = async (req, res) => {
  try {
    const getAllCompanies = await Companies.find({}).select(
      "name email_address description products"
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
    const skip = Number(req.query.skip) || 1;
    const limit = Number(req.query.limit) || 50;
  const sortName = await Companies.find().select("name").skip(skip).limit(limit).sort({ name: 1 }).lean();
  return res.status(200).json(sortName);
};

//listing with skip
export const listingWithSkip = async (req, res) => {
    const skip = Number(req.query.skip) || 1;
    const limit = Number(req.query.limit) || 50;
  const withSkip = await Companies.find().select("name email_address description products").skip(skip).limit(limit).sort({ name: 1 }).lean();
  return res.status(200).json(withSkip);
};