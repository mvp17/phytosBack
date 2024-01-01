import Person from '../domain/Person.js';


export const getPersons = async (req, res) => {
    try {
        const persons = await Person.find();
        res.status(200).json(persons);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
