import Person from '../domain/Person.js';


export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await Person.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(201).json(person);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
