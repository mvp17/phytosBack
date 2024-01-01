import Season from '../domain/Season.js';


export const updateSeason = async (req, res) => {
    try {
        const { id } = req.params;
        const season = await Season.findByIdAndUpdate(id, {$set: req.body}, {new: true});
        res.status(201).json(season);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
