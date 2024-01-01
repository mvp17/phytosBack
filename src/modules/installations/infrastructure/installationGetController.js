import Installation from '../domain/Installation.js';


export const getInstallation = async (req, res) => {
    try {
        const { id } = req.params;
        const installation = await Installation.findById(id);
        if (!installation) return res.status(400).json({ message: "Installation Not Found" });
        
        res.status(200).json(installation);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
