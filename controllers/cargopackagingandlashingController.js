const db = require("../models/index");

const CargoPackagingAndLashing = db.CargoPackagingAndLashing;

// CRUD Controllers
exports.createCargoPackagingAndLashing = (req, res, next) => {
  const { goodsDescription, name, email, mobile, remarks } = req.body;

  CargoPackagingAndLashing.create({
    goodsDescription,
    name,
    email,
    mobile,
    remarks,
  })
    .then((result) => {
      res.status(201).json({
        message: "Cargo Packaging and Lashing record created successfully!",
        record: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "An error occurred while creating the record.",
      });
    });
};

exports.getCargoPackagingAndLashing = async (req, res, next) => {
  try {
    const records = await CargoPackagingAndLashing.findAll();
    res.status(200).json({ records });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving records" });
  }
};

exports.deleteCargoPackagingAndLashing = async (req, res, next) => {
    const recordId = req.params.recordId;
    try {
        const record = await CargoPackagingAndLashing.findByPk(recordId);
        if (!record) {
        return res.status(404).json({ message: "Record not found!" });
        }
        await record.destroy();
        console.log("Record Deleted!");
        res.status(200).json({ message: "Record deleted successfully!" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error deleting record" });
    }
    }
