const express = require("express")
const { getVacataires, addVacataire, editVacataire, deleteVacataire, affecteVacataire, desaffecteVacataire } = require("../controllers/vacataires.controllers")
const router = express.Router()

router.get("/", getVacataires)

router.post("/newVacataire", addVacataire)

router.put("/editVacataire/:id", editVacataire)

router.delete("/deleteVacataire/:id", deleteVacataire)

router.patch("/affecteVacataire/:id", affecteVacataire)

router.patch("/desaffecteVacataire/:id", desaffecteVacataire)

module.exports = router