import Marker from '../../map/domain/Marker.js';


export const getAllMarkers = async (req, res) => {
    try {
        const markers = await Marker.find();
        res.status(200).json(markers);
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
}
