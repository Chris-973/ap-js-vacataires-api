const express = require("express")
const { getVacataires, addVacataire, editVacataire, deleteVacataire, affecteVacataire, desaffecteVacataire } = require("../controllers/vacataires.controllers")
const router = express.Router()

router.get("/", getVacataires)

router.post("/addVacataire", addVacataire)

router.put("/editVacataire/:id", editVacataire)

router.delete("/deleteVacataire/:id", deleteVacataire)

router.put("/affecteVacataire/:idCours/:idVacataire", affecteVacataire)

router.patch("/desaffecteVacataire/:id", desaffecteVacataire)

module.exports = router