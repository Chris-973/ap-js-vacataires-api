const coursModel = require('../models/cours.models')

module.exports.getCours = async (req, res) => {
    const cours = await coursModel.find()
    res.status(200).json(cours)
}

module.exports.addCours = async (req, res) => {
    // Vérifie la présence des propriétés requises dans la requête
    const requiredProperties = ['name', 'color', 'group'];
  
    for (const property of requiredProperties) {
      if (!req.body[property]) {
        return res.status(400).json({ erreur: `Le champ '${property}' est requis.` });
      }
    }
    
    // Crée le cours uniquement si toutes les propriétés sont présentes
    const coursData = {
      name: req.body.name,
      color: req.body.color,
      group: req.body.group,
    };
  
    if (req.body.vacataire) {
      coursData.vacataire = {
        firstName: req.body.vacataire.firstName,
        lastName: req.body.vacataire.lastName,
        phone: req.body.vacataire.phone,
        email: req.body.vacataire.email,
        github: req.body.vacataire.github,
        skills: req.body.vacataire.skills,
        status: req.body.vacataire.status,
      };
    }
  
    const cours = await coursModel.create(coursData);
  
    res.status(200).json(cours);
  };

module.exports.editCours = async (req, res) => {
    const cours = await coursModel.findById(req.params.id)

    if(!cours) {
        res.status(400).json({
            message: "Ce cours n'existe pas"
        })
    }

    const updateCours = await coursModel.findByIdAndUpdate(
        cours,
        req.body,
        {new: true}
    )

    res.status(200).json(updateCours)
}

module.exports.deleteCours = async (req, res) => {
    const cours = await coursModel.findById(req.params.id)

    if(!cours) {
        res.status(400).json({
            message: "Ce cours n'existe pas"
        })
    }

    await cours.deleteOne({ _id: req.params.id })
    res.status(200).json("Cours supprimé :" + cours)
}

module.exports.disusedVacataire = async (req, res) => {
    const cours = await coursModel.findById(req.params.id)

    if(!cours.vacataire) {
        res.status(400).json({
            message: "Aucun vacataire affecté"
        })
    }

    console.log(cours.vacataire);

    // await cours.vacataire.deleteOne({ _id: req.params.vacataire.id })
    // res.status(200).json("vacataire désaffecté :" + cours.vacataire)
}