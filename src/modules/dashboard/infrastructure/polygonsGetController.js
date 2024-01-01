import Polygon from '../../map/domain/Polygon.js';


export const getAllPolygons = async (req , res) => {
    try {
        const polygons = await Polygon.find();
        res.status(200).json(polygons);
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
