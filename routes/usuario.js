const { Router } = require("express");
const { usuarioPost, usuariosGet, usuarioGetId, usuarioPutId, busquedaUsuarios, usuarioCredenciales } = require("../controllers/usuario");

const router = Router()

router.post('/', usuarioPost)
router.get('/', usuariosGet)
router.get('/:id',usuarioGetId)
router.get('/:usuario/:password', usuarioCredenciales)
router.post('/busca/:termino', busquedaUsuarios)
router.put('/:id', usuarioPutId)
module.exports = router