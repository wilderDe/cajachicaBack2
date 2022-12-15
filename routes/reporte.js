
const { Router } = require("express");
const { reportesGet } = require("../controllers/reporte");


const router = Router()

router.get('/:start/:end', reportesGet)

module.exports = router