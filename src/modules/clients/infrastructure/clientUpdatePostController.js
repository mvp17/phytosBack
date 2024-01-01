import Client from '../domain/Client.js';


export const updateClient = async (req, res) => {
    try {
        const { id } = req.params;
        const client = await Client.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(201).json(client);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
