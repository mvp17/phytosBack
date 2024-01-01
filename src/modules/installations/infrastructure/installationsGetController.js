import Installation from '../domain/Installation.js';


export const getInstallations = async (req, res) => {
    try {
        const installations = await Installation.find();
        res.status(200).json(installations);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
