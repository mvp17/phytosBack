import Client from '../domain/Client.js';


export const getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
