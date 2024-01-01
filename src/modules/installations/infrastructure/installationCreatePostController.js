import Installation from '../domain/Installation.js';


export const createInstallation = async (req, res) => {
    try {
        const newInstallation = new Installation({
            name: req.body.name,
            productName: req.body.productName,
            seasonYear: req.body.seasonYear,
            clientName: req.body.clientName,
            plantationName: req.body.plantationName,
            plotName: req.body.plotName,
            installationDate: req.body.installationDate,
            activationDate: req.body.activationDate,
            province: req.body.province,
            municipality: req.body.municipality,
            features: req.body.features,
            projectionObservations: req.body.projectionObservations,
            installationObservations: req.body.installationObservations,
            revisionObservations: req.body.revisionObservations,
            retreatObservations: req.body.retreatObservations,
            contacts: req.body.contacts
        });

        await newInstallation.save();
        res.status(201).json(newInstallation);

    } catch(error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
};
