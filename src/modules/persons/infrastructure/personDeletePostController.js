import Person from '../domain/Person.js';


export const deletePerson = async (req, res) => {
    try {
        await Person.findByIdAndRemove(req.params.id);
        res.status(200).json({ status: "Person Deleted" });
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
