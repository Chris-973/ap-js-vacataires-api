const coursModel = require("../models/cours.models");
const vacataireModels = require("../models/vacataire.models");

module.exports.getCours = async (req, res) => {
  const cours = await coursModel.find();
  res.status(200).json(cours);
};

module.exports.addCours = async (req, res) => {
  // Vérifie la présence des propriétés requises dans la requête
  const requiredProperties = ["name", "color", "group"];

  for (const property of requiredProperties) {
    if (!req.body[property]) {
      return res
        .status(400)
        .json({ erreur: `Le champ '${property}' est requis.` });
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
      status: 'admis',
    };
  }

  const cours = await coursModel.create(coursData);

  res.status(200).json(cours);
};

module.exports.editCours = async (req, res) => {
  const cours = await coursModel.findById(req.params.id);

  if (!cours) {
    res.status(400).json({
      message: "Ce cours n'existe pas",
    });
  }

  const updateCours = await coursModel.findByIdAndUpdate(cours, req.body, {
    new: true,
  });

  res.status(200).json(updateCours);
};

module.exports.deleteCours = async (req, res) => {
  const cours = await coursModel.findById(req.params.id);

  if (!cours) {
    res.status(400).json({
      message: "Ce cours n'existe pas",
    });
  }

  await cours.deleteOne({ _id: req.params.id });
  res.status(200).json("Cours supprimé :" + cours);
};

module.exports.desaffecterVacataire = async (req, res) => {
  const idCours = req.params.idCours;
  const cours = await coursModel.findById(idCours);

  const idVacataire = cours.vacataire._id;
  const vacataire = await vacataireModels.findById(idVacataire);

  if (!cours) {
    return res.status(400).json({ erreur: 'Cours non trouvé' });
  }

  if (!vacataire) {
    return res.status(400).json({ erreur: 'Aucun vacataire affecter à ce cours' });
  }

  try {
    
    cours.vacataire = {}
    vacataire.status = 'non affecter'

    const coursModifie = await cours.save();
    const vacataireModifie = await vacataire.save();

    res.status(200).json({
      cours: cours
    });
  } catch(err) {
    res.status(400).json(err)
  }



};
