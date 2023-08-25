const db = require('../models/index');
// CRUD Controllers
//get all querries
exports.getQuerries = (req, res, next) => {
    db.Contact.findAll()
        .then(querries => {
            res.status(200).json({ querries: querries });
        })
        .catch(err => console.log(err));
}
//get querry by id
exports.getQuerry = (req, res, next) => {
    const querryId = req.params.querryId;
    db.Contact.findByPk(querryId)
        .then(querry => {
            if (!querry) {
                return res.status(404).json({ message: 'Querry not found!' });
            }
            res.status(200).json({ querry: querry });
        })
        .catch(err => console.log(err));
}
//create querry
exports.createQuerry = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const subject = req.body.subject;
    const message = req.body.message;
    db.Contact.create({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message
    })
        .then(result => {
            console.log('Created Querry');
            res.status(201).json({
                message: 'Querry created successfully!',
                querry: result
            });
        })
        .catch(err => {
            console.log(err);
        });
}
//delete querry
exports.deleteQuerry = (req, res, next) => {
    const querryId = req.params.querryId;
    db.Contact.findByPk(querryId)
        .then(querry => {
            if (!querry) {
                return res.status(404).json({ message: 'Querry not found!' });
            }
            return querry.destroy();
        })
        .then(result => {
            console.log('Querry Deleted!');
            res.status(200).json({ message: 'Querry deleted successfully!' });
        })
        .catch(err => console.log(err));
}
