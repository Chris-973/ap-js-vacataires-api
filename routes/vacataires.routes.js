const express = require("express")
const { getVacataires, newVacataire, editVacataire, deleteVacataire, affecteVacataire, desaffecteVacataire } = require("../controllers/vacataires.controllers")
const router = express.Router()

router.get("/", getVacataires)

router.post("/addVacataire", newVacataire)

router.put("/editVacataire/:id", editVacataire)

router.delete("/deleteVacataire/:id", deleteVacataire)

router.patch("/affecteVacataire/:id", affecteVacataire)

router.patch("/desaffecteVacataire/:id", desaffecteVacataire)

module.exports = router