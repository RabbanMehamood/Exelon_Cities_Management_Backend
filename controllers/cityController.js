const City = require('../models/city');

// Adding a new city
const addCity = async (req, res) => {
  try {
    const { name, population, country, latitude, longitude } = req.body;
    const city = new City({ name, population, country, latitude, longitude });
    await city.save();
    res.status(201).json({ message: 'City added successfully', city });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Updating an existing city
const updateCity = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedCity = await City.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedCity) return res.status(404).json({ message: 'City not found' });
    res.status(200).json({ message: 'City updated successfully', updatedCity });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Deleting a city
const deleteCity = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCity = await City.findByIdAndDelete(id);
    if (!deletedCity) return res.status(404).json({ message: 'City not found' });
    res.status(200).json({ message: 'City deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get cities with pagination, filtering, sorting, and searching
const getCities = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort, filter, search, projection } = req.query;
    const query = search ? { name: new RegExp(search, 'i') } : {};
    const cities = await City.find(query)
      .sort(sort ? JSON.parse(sort) : {})
      .select(projection ? JSON.parse(projection) : {})
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    res.status(200).json(cities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addCity, updateCity, deleteCity, getCities };
