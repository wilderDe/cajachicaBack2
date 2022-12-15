const Registro = require("../models/registro");

const reportesGet = async(req, res) => {
    const {start, end} = req.params;
    const startS = new Date(start).toISOString()
    const endS = new Date(end).toISOString()
    const registro = await Registro.find({
        fecha:{
            $gte:startS,
            $lt: endS
        }
    });
    res.json(registro)
  

}

module.exports = {
    reportesGet
}