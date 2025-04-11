const { query } = require('../models/materialModel');

// Create a new material donation
const createMaterial = async (materialData) => {
    const { name, description, quantity, donated_by } = materialData;
    const sql = 'INSERT INTO materials (name, description, quantity, donated_by) VALUES (?, ?, ?, ?)';
    const result = await query(sql, [name, description, quantity, donated_by]);
    return result.insertId; // Return the ID of the newly created material
};

// Get all materials
const getAllMaterials = async () => {
    const sql = 'SELECT * FROM materials';
    const results = await query(sql);
    return results;
};

// Get a material by ID
const getMaterialById = async (id) => {
    const sql = 'SELECT * FROM materials WHERE id = ?';
    const results = await query(sql, [id]);
    return results[0]; // Return the first matching record
};

// Update a material
const updateMaterial = async (id, materialData) => {
    const { name, description, quantity, donated_by } = materialData;
    const sql = 'UPDATE materials SET name = ?, description = ?, quantity = ?, donated_by = ? WHERE id = ?';
    const result = await query(sql, [name, description, quantity, donated_by, id]);
    return result.affectedRows > 0; // Return true if update was successful
};

// Delete a material
const deleteMaterial = async (id) => {
    const sql = 'DELETE FROM materials WHERE id = ?';
    const result = await query(sql, [id]);
    return result.affectedRows > 0; // Return true if deletion was successful
};

module.exports = {
    createMaterial,
    getAllMaterials,
    getMaterialById,
    updateMaterial,
    deleteMaterial
};