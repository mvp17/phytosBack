import Client from '../domain/Client.js';


export const createClient = async (req, res) => {
    try {
        const newClient = new Client({
            name: req.body.name,
            address: req.body.address
        });

        await newClient.save();
        res.status(201).json(newClient);

    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
