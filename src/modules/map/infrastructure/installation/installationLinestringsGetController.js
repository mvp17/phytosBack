export const openGeoJSONLineStringsFromInstallation = async (req, res) => {
    try {
        const { id } = req.params;
        const linestrings = await LineString.find({idInstallation: id});
        res.status(200).json(linestrings);
    } catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
