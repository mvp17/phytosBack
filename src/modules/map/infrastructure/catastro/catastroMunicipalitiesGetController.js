import axios from 'axios';
import xml from 'xml2json';


export const getCatastroMunicipalities = async (req, res) => {
    try {
        const {province} = req.params;
        const municipalityCatastroURL = "http://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejerocodigos.asmx/ConsultaMunicipioCodigos?CodigoProvincia="
        + province + "&CodigoMunicipio=0&CodigoMunicipioIne=0";
        var resMunicipalities = [];

        // El tiempo estimado de parada es de 15:15 a 19:15 (CATASTRO)
        axios.get(municipalityCatastroURL).then(municipalitiesXML => {
            const stringJsonMunicipalities = xml.toJson(municipalitiesXML.data);
            const jsonMunicipalities = JSON.parse(stringJsonMunicipalities);
            const municipalities = jsonMunicipalities.consulta_municipiero.municipiero.muni;
            municipalities.forEach((municipality) => {
                resMunicipalities.push({ nm: municipality.nm, 
                                         locat: { cd: municipality.locat.cd, cmc: municipality.locat.cmc },
                                         loine: { cp: municipality.loine.cp, cm: municipality.loine.cm } 
                                        });
            });
            res.status(200).json(resMunicipalities);
        });
    }
    catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
