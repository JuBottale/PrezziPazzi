const express = require ("express");
const app = express();
const router = express.Router();
const path = require ("path");  

const mainController = require ("../controllers/mainController.js");

router.get("/", mainController.index);

router.get("/contacto", mainController.contacto);

router.get("/quienesSomos", mainController.quienesSomos);

router.get("/productos", mainController.productos);

router.get("/productosPlatalac", mainController.productosPlatalac);

module.exports = router;  