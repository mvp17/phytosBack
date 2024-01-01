import Person from '../domain/Person.js';


export const createPerson = async (req, res) => {
    try {
        const newPerson = new Person({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            relatedClient: req.body.relatedClient
        });

        await newPerson.save();
        res.status(201).json(newPerson);

    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
