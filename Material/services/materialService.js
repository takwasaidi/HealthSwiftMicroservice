const { query } = require('../models/materialModel');

// Create a new material donation
const createMaterial = async (materialData, userId) => {
    const { name, description, quantity, campaign_id } = materialData;
    const sql = `
        INSERT INTO materials (name, description, quantity, donated_by, campaign_id) 
        VALUES (?, ?, ?, ?, ?)
    `;
    const result = await query(sql, [name, description, quantity, userId, campaign_id]);
    return result.insertId;
};

// Get all materials for the authenticated donor
const getAllMaterials = async (userId) => {
    const sql = 'SELECT * FROM materials WHERE donated_by = ?';
    const results = await query(sql, [userId]);
    return results;
};

// Get a material by ID (no restriction on ownership for now)
const getMaterialById = async (id) => {
    const sql = 'SELECT * FROM materials WHERE id = ?';
    const results = await query(sql, [id]);
    return results[0];
};

// Update a material
const updateMaterial = async (id, materialData, userId) => {
    const { name, description, quantity, campaign_id } = materialData;
    const sql = `
        UPDATE materials 
        SET name = ?, description = ?, quantity = ?, campaign_id = ?
        WHERE id = ? AND donated_by = ?
    `;
    const result = await query(sql, [name, description, quantity, campaign_id, id, userId]);
    return result.affectedRows > 0;
};

// Delete a material
const deleteMaterial = async (id, userId) => {
    const sql = 'DELETE FROM materials WHERE id = ? AND donated_by = ?';
    const result = await query(sql, [id, userId]);
    return result.affectedRows > 0;
};

module.exports = {
    createMaterial,
    getAllMaterials,
    getMaterialById,
    updateMaterial,
    deleteMaterial
};
