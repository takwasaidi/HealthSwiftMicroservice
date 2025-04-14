const materialService = require('../services/materialService');

exports.createMaterial = async (req, res) => {
    try {
        const userId = req.headers['userid'];
        const materialData = req.body;
        const newMaterialId = await materialService.createMaterial(materialData, userId);
        res.status(201).json({ message: 'Material created successfully', id: newMaterialId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getAllMaterials = async (req, res) => {
    try {
        const userId = req.headers['userid'];
        const materials = await materialService.getAllMaterials(userId);
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

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

exports.updateMaterial = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.headers['userid'];
        const materialData = req.body;
        const updated = await materialService.updateMaterial(id, materialData, userId);
        if (!updated) {
            return res.status(404).json({ message: 'Material not found or you are not the owner' });
        }
        res.status(200).json({ message: 'Material updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.deleteMaterial = async (req, res) => {
    try {
        const id = req.params.id;
        const userId = req.headers['userid'];
        const deleted = await materialService.deleteMaterial(id, userId);
        if (!deleted) {
            return res.status(404).json({ message: 'Material not found or you are not the owner' });
        }
        res.status(200).json({ message: 'Material deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
