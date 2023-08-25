const db = require("../models/index");

const CargoEscortService = db.CargoEscortService;
// CRUD Controllers
exports.createCargoEscortService = (req, res, next) => {
    const cargoEscortService = new CargoEscortService({
        cityOfDestination: req.body.cityOfDestination,
        typeOfPackaging: req.body.typeOfPackaging,
        cityOfOrigin: req.body.cityOfOrigin,
        goodsDescription: req.body.goodsDescription,
        name: req.body.name,
        mobile: req.body.mobile,
        email: req.body.email,
        companyName: req.body.companyName,
        remarks: req.body.remarks
    });

    cargoEscortService.save()
        .then(result => {
            res.status(201).json({
                message: 'Cargo Escort Service created successfully!',
                cargoEscortService: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: 'An error occurred while creating the Cargo Escort Service.'
            });
        });
};
exports.getAllCargoEscortServices = async function getAllCargoEscortServices(){
    try {
        const cargoEscortServices = await CargoEscortService.findAll();
        return cargoEscortServices;
    } catch (err) {
        console.error(err);
    }
}
exports.getCargoEscortService = (req, res, next) => {
    const cargoEscortServiceId = req.params.cargoEscortServiceId;
    CargoEscortService.findByPk(cargoEscortServiceId)
        .then(cargoEscortService => {
            if (!cargoEscortService) {
                return res.status(404).json({ message: 'Cargo Escort Service not found!' });
            }
            res.status(200).json({ cargoEscortService: cargoEscortService });
        })
        .catch(err => console.log(err));
}
exports.deleteCargoEscortService = (req, res, next) => {
    const cargoEscortServiceId = req.params.cargoEscortServiceId;
    CargoEscortService.findByPk(cargoEscortServiceId)
        .then(cargoEscortService => {
            if (!cargoEscortService) {
                return res.status(404).json({ message: 'Cargo Escort Service not found!' });
            }
            return cargoEscortService.destroy();
        })
        .then(result => {
            console.log('Cargo Escort Service deleted successfully!');
            res.status(200).json({ message: 'Cargo Escort Service deleted successfully!' });
        })
        .catch(err => console.log(err));
}
