const CargoPackagingAndLashing = require("../models/cargopackagingandlashing");

// Create CargoPackagingAndLashing
exports.createCargoPackagingAndLashing = (req, res, next) => {
  const { goodsDescription, name, email, mobile, remarks } = req.body;

  const cargoPackagingAndLashing = new CargoPackagingAndLashing({
    goodsDescription,
    name,
    email,
    mobile,
    remarks,
  });

  cargoPackagingAndLashing
    .save()
    .then((result) => {
      res.status(200).json({
        message: "Cargo Packaging and Lashing record created successfully!",
        record: result,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: "An error occurred while creating the record.",
      });
    });
};

// Get all CargoPackagingAndLashing records
exports.getCargoPackagingAndLashing = async (req, res, next) => {
  try {
    const records = await CargoPackagingAndLashing.find();
    res.status(200).json({ records });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving records" });
  }
};

// Delete a CargoPackagingAndLashing record by ID
exports.deleteCargoPackagingAndLashing = async (req, res, next) => {
  const recordId = req.params.recordId;
  try {
    const record = await CargoPackagingAndLashing.findById(recordId);
    if (!record) {
      return res.status(404).json({ message: "Record not found!" });
    }
    await record.remove();
    console.log("Record Deleted!");
    res.status(200).json({ message: "Record deleted successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting record" });
  }
};
