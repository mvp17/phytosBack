import axios from 'axios';
import xml from 'xml2json';


export const getNonProtectedCatastroData = async (req, res) => {
    try {
         // Le dice a TypeScript que aunque algo parece que podría ser nulo, puede confiar en que no lo es: '!'
        const provinceCode = req.query.provinceCode.toString();
        const municipalityCode = req.query.municipalityCode.toString();
        const INEMunicipalityCode = req.query.INEMunicipalityCode.toString();
        const area = req.query.area.toString();
        const plot = req.query.plot.toString();
        const provinceName = req.query.province.toString();
        const municipalityName = req.query.municipality.toString();
        
        const url = "http://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejerocodigos.asmx/Consulta_DNPPP_Codigos?"
        + "CodigoProvincia=" + provinceCode + "&CodigoMunicipio=" + municipalityCode + "&CodigoMunicipioINE=" + INEMunicipalityCode +
        "&Poligono=" + area + "&Parcela=" + plot;

        // El tiempo estimado de parada es de 15:15 a 19:15 (CATASTRO)
        axios.get(url).then(xmlSearchResult => {
            const stringJsonSearchResult = xml.toJson(xmlSearchResult.data);
            const jsonSearchResult = JSON.parse(stringJsonSearchResult);
            const pc1 = jsonSearchResult.consulta_dnp.bico.bi.idbi.rc.pc1;
            const pc2 = jsonSearchResult.consulta_dnp.bico.bi.idbi.rc.pc2;
            processRC(pc1 + pc2, provinceName, municipalityName, res);
        });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};

function processRC(cadastralReference, provinceName, municipalityName, res) {
    try {
        const url = "http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/Consulta_CPMRC?Provincia="
        + provinceName + "&Municipio=" + municipalityName + "&SRS=EPSG:4258&RC=" + cadastralReference;
        axios.get(url).then(xmlSearchResult => {
            var plotCentroidCoordinates = [];
            const stringJsonSearchResult = xml.toJson(xmlSearchResult.data);
            const jsonSearchResult = JSON.parse(stringJsonSearchResult);
            plotCentroidCoordinates.push(jsonSearchResult.consulta_coordenadas.coordenadas.coord.geo.xcen);
            plotCentroidCoordinates.push(jsonSearchResult.consulta_coordenadas.coordenadas.coord.geo.ycen);
            res.status(200).json(plotCentroidCoordinates);
        });
    }
    catch (error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
