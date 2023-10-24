const express = require("express")
const { getCours, addCours, newCours, editCours, deleteCours, disusedVacataire } = require("../controllers/cours.controllers")
const router = express.Router()

router.get("/", getCours)

router.post("/addCours", addCours)

router.put("/editCours/:id", editCours)

router.delete("/deleteCours/:id", deleteCours)

router.get("/disusedVacataire/:id", disusedVacataire)

router.get("/disusedVacataire/:id", disusedVacataire)

module.exports = router