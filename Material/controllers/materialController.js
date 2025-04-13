const materialService = require('../services/materialService');

// Create a new material donation
exports.createMaterial = async (req, res) => {
    try {
        const materialData = req.body;
        const newMaterialId = await materialService.createMaterial(materialData);
        res.status(201).json({ message: 'Material created successfully', id: newMaterialId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all materials
exports.getAllMaterials = async (req, res) => {
    try {
        const materials = await materialService.getAllMaterials();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get a material by ID
exports.getMaterialById = async (req, res) => {
    try {
        const id = req.params.id;
        const material = await materialService.getMaterialById(id);
        if (!material) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json(material);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a material
exports.updateMaterial = async (req, res) => {
    try {
        const id = req.params.id;
        const materialData = req.body;
        const updated = await materialService.updateMaterial(id, materialData);
        if (!updated) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json({ message: 'Material updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a material
exports.deleteMaterial = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await materialService.deleteMaterial(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Material not found' });
        }
        res.status(200).json({ message: 'Material deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};