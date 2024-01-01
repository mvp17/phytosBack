import LineString from '../domain/LineString.js';


export const saveLineStringsGeoJSON = async (req, res) => {
    try {
        const { id } = req.params;
        const lineStringsFromRequest = req.body.features;
        var lineStringsToDB = [];
        lineStringsFromRequest.forEach((lineStringFromRequest) => {
            const lineStringToDB = {
                coordinates: lineStringFromRequest.geometry.coordinates,
                idInstallation: id
            };
            lineStringsToDB.push(lineStringToDB);
        });
        if (lineStringsToDB.length === 0) {
            console.log("LineString array empty");
        }
        else {
            const linestrings = await LineString.find({idInstallation: id});
            const lineString = new LineString();
            if (linestrings.length !== 0) {
                await LineString.deleteMany({idInstallation: id});
                lineString.collection.insertMany(lineStringsToDB);
            }
            else {
                lineString.collection.insertMany(lineStringsToDB);
            }
        }
    }
    catch(error) {
        console.log(error);
        res.status(400).json({ message: error });
    }
};
