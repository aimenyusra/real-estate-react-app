import mongoose from "mongoose";
const propertySchema = new mongoose.Schema({
image:     { type: String, required: true },
  price:     { type: Number, required: true },
  location:  { type: String, required: true },
  type:      { type: String, required: true },
  bedrooms:  { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  sqft:      { type: Number, required: true },
  badge:     { type: String, default: null },
  lat:       { type: Number },
  lng:       { type: Number },
  listed:    { type: String },
}, { timestamps: true });

const Property = mongoose.model("Property", propertySchema);

export default Property;