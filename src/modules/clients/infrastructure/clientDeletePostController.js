import Client from '../domain/Client.js';


export const deleteClient = async (req, res,) => {
    try {
        await Client.findByIdAndRemove(req.params.id);
        res.status(200).json({ status: "Client Deleted" });
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
