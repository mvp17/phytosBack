import Installation from '../domain/Installation.js';


export const updateInstallation = async (req, res) => {
    try {
        const { id } = req.params;
        const installation = await Installation.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(201).json(installation);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
