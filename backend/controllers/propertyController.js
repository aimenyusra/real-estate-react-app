import Property from "../models/property";

//get all properties
export const getProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

//get single property
export const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);  
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.json(property);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};