import Marker from '../domain/Marker.js';


export const saveMarkersGeoJSON = async (req, res) => {
    try {
        const markersFromRequest = req.body;
        var markersToDB = [];
        markersFromRequest.forEach((markerFromRequest) => {
            const markerToDB = {
                type: markerFromRequest.type,
                coordinates: markerFromRequest.coordinates,
                idInstallation: markerFromRequest.idInstallation,
                waypoint: markerFromRequest.waypoint
            };
            markersToDB.push(markerToDB);
        });

        if (markersToDB.length === 0) {
            console.log("Marker array empty");
        }
        else {
            const marker = new Marker();
            const markers = await Marker.find({idInstallation: markersToDB[0].idInstallation});
            if (markers.length !== 0) {
                await Marker.deleteMany({idInstallation: markersToDB[0].idInstallation});
                marker.collection.insertMany(markersToDB);
            }
            else {
                marker.collection.insertMany(markersToDB);
            }
        }
    }
    catch(error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
};
