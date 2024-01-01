import axios from 'axios';
import xml from 'xml2json';


export const getCatastroProvinces = async (req, res) => {
    try {
        const provinceCatastroURL = "http://ovc.catastro.meh.es/ovcservweb/ovcswlocalizacionrc/ovccallejerocodigos.asmx/ConsultaProvincia";
        var resProvinces = [];
        // El tiempo estimado de parada es de 15:15 a 19:15 (CATASTRO)
        axios.get(provinceCatastroURL).then(provincesXML => {
            const stringJsonProvinces = xml.toJson(provincesXML.data);
            const jsonProvinces = JSON.parse(stringJsonProvinces);
            const provinces = jsonProvinces.consulta_provinciero.provinciero.prov;
            provinces.forEach((province) => {
                resProvinces.push({ cpine: province.cpine , np: province.np });
            });
            res.status(200).json(resProvinces);
        });
    }
    catch(error) {
        console.log(error)
        res.status(400).json({ message: error });
    }
};
