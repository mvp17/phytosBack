import Season from '../domain/Season.js';


export const getSeasons = async (req, res) => {
    try {
        const seasons = await Season.find();
        res.status(200).json(seasons);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
