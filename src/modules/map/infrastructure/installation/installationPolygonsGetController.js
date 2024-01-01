import Polygon from '../../domain/Polygon.js';


export const openGeoJSONPolygonsFromInstallation = async (req, res) => {
    try {
        const { id } = req.params;
        const polygons = await Polygon.find({idInstallation: id});
        res.status(200).json(polygons);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
