import Season from '../domain/Season.js';


export const createSeason = async (req, res) => {
    try {
        const newSeason = new Season({
            year: req.body.year,
            color: req.body.color,
        });

        await newSeason.save();
        res.status(201).json(newSeason);

    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
