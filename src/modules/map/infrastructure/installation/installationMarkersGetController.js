import Marker from '../../domain/Marker.js';


export const openGeoJSONMarkersFromInstallation = async (req, res) => {
    try {
        const { id } = req.params;
        const markers = await Marker.find({idInstallation: id});
        res.status(200).json(markers);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
