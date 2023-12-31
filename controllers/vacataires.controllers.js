const VacataireModel = require('../models/vacataire.models')
const CoursModel = require('../models/cours.models')

module.exports.getVacataires = async (req, res) => {
    const vacataire = await VacataireModel.find()
    res.status(200).json(vacataire)
}

module.exports.addVacataire = async(req, res) => {
    // Vérifie la présence des propriétés requises dans la requête
    const requiredProperties = ['firstName', 'lastName', 'phone', 'email', 'github'];

    for (const property of requiredProperties) {
        if (!req.body[property]) {
            return res.status(400).json({ erreur: `Le champ '${property}' est requis.` });
        }
    }

    // Crée le Vacataire uniquement si toutes les propriétés sont présentes
    const vacataire = await VacataireModel.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        github: req.body.github,
        skills: req.body.skills,
        status: 'en attente'
    });

    res.status(200).json(vacataire);
}

module.exports.editVacataire = async (req, res) => {
    const vacataire = await VacataireModel.findById(req.params.id)

    if(!vacataire) {
        res.status(400).json({
            message: "Ce vacataire n'existe pas"
        })
    }

    const updateVacataire = await VacataireModel.findByIdAndUpdate(
        vacataire,
        req.body,
        {new: true}
    )

    res.status(200).json(updateVacataire)
}

module.exports.deleteVacataire = async (req, res) => {
    const vacataire = await VacataireModel.findById(req.params.id)

    if(!vacataire) {
        res.status(400).json({
            message: "Ce vacataire n'existe pas"
        })
    }


    if(vacataire.status == 'affecter') {
        return res.status(400).json({ err: 'le vacataire est affecter à un cours' }); 
    }

    await vacataire.deleteOne({ _id: req.params.id })
    res.status(200).json({
        message: 'Vacataire supprimé',
        vacataire: vacataire
    })
}

module.exports.affecteVacataire = async (req, res) => {
    const cours = await CoursModel.findById(
        req.params.idCours
    )

    if(!cours) {
        res.status(400).json({
            message: "Ce cours n'existe pas"
        })
    }

    if(cours.vacataire._id) {
        res.status(400).json({
            message: "Il y'a déjà un vacataire admis"
        })
    }
    
    try {
        await CoursModel.findByIdAndUpdate(
            req.params.idCours,
            data = {
                vacataire: req.body
            },
            // {$addToSet: {vacataire: req.body.vacataire}},
            {new: true}
        ).then((data) => res.status(200).send(data))
    } catch (err) {
        res.status(400).json(err)
    }

    try {
        await VacataireModel.findByIdAndUpdate(
            req.params.idVacataire,
            data = {
                cours: cours,
                status: 'affecter'
            },

            {new: true}
        ).then((data) => res.status(200).send(data))
    } catch (err) {

    }
}