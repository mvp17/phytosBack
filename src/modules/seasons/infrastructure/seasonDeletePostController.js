import Season from '../domain/Season.js';


export const deleteSeason = async (req, res) => {
    try {
        await Season.findByIdAndRemove(req.params.id);
        res.status(200).json({ status: "Season Deleted" });
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
