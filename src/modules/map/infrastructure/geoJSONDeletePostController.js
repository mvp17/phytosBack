import Marker from '../domain/Marker.js';
import LineString from '../domain/LineString.js';
import Polygon from '../domain/Polygon.js';


export const deleteGeoJSON = async (req, res) => {
    try {
        const { id } = req.params;
        var marker = false;
        var line = false;
        var polygon = false;
        const markers = await Marker.find({idInstallation: id});
        if (markers.length === 0) {
            console.log("NO MARKERS TO DELETE");
            marker = true;
        }
        else {
            await Marker.deleteMany({idInstallation: id});
        }
        
        const linestrings = await LineString.find({idInstallation: id});
        if (linestrings.length === 0) {
            console.log("NO LINESTRINGS TO DELETE");
            line = true;
        }
        else {
            await LineString.deleteMany({idInstallation: id});
        }
        
        const polygons = await Polygon.find({idInstallation: id});
        if (polygons.length === 0) {
            console.log("NO POLYGONS TO DELETE");
            polygon = true;
        }
        else {
            await Polygon.deleteMany({idInstallation: id});
        }

        if (marker && line && polygon) {
            res.status(200).json({ message: "No map geo elements to delete" })
        }
        else {
            res.status(200).json({ message: "Map geo elements deleted" })
        }
    }
    catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }  
};
