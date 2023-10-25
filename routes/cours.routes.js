const express = require("express")
const { getCours, addCours, newCours, editCours, deleteCours, desaffecterVacataire } = require("../controllers/cours.controllers")
const router = express.Router()

router.get("/", getCours)

router.post("/addCours", addCours)

router.put("/editCours/:id", editCours)

router.delete("/deleteCours/:id", deleteCours)

router.patch("/desaffecterVacataire/:idCours", desaffecterVacataire)

module.exports = router