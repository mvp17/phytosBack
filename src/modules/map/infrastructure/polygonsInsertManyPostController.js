import Polygon from '../domain/Polygon.js';


export const savePolygonsGeoJSON = async (req, res) => {
    try {
        const { id } = req.params;
        const polygonsFromRequest = req.body.features;
        var polygonsToDB = [];
        polygonsFromRequest.forEach((polygonFromRequest) => {
            const polygonToDB = {
                coordinates: polygonFromRequest.geometry.coordinates,
                idInstallation: id
            };
            polygonsToDB.push(polygonToDB);
        });
        if (polygonsToDB.length === 0) {
            console.log("Polygon array empty");
        }
        else {
            const polygons = await Polygon.find({idInstallation: id});
            const polygon = new Polygon();
            if (polygons.length !== 0) {
                await Polygon.deleteMany({idInstallation: id});
                polygon.collection.insertMany(polygonsToDB);
            }
            else {
                polygon.collection.insertMany(polygonsToDB);
            }
        }
    }
    catch(error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
};
