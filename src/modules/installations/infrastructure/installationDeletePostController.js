import Installation from '../domain/Installation.js';


export const deleteInstallation = async (req, res) => {
    try {
        await Installation.findByIdAndRemove(req.params.id);
        res.status(200).json({ status: "Installation Deleted" });
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
