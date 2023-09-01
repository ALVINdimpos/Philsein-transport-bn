const Contact = require('../models/contact');

// Get all Queries
exports.getQueries = async (req, res, next) => {
  try {
    const queries = await Contact.find();
    res.status(200).json({ queries });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error retrieving queries" });
  }
};

// Get a Query by ID
exports.getQuery = async (req, res, next) => {
  const queryId = req.params.queryId;
  try {
    const query = await Contact.findById(queryId);
    if (!query) {
      return res.status(404).json({ message: 'Query not found!' });
    }
    res.status(200).json({ query });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving the query' });
  }
};

// Create a Query
exports.createQuery = (req, res, next) => {
  const { name, email, phone, subject, message } = req.body;

  const query = new Contact({
    name,
    email,
    phone,
    subject,
    message,
  });

  query
    .save()
    .then((result) => {
      console.log('Created Query');
      res.status(200).json({
        message: 'Query created successfully!',
        query: result
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        message: 'An error occurred while creating the query.'
      });
    });
};

// Delete a Query by ID
exports.deleteQuery = async (req, res, next) => {
  const queryId = req.params.queryId;
  try {
    const query = await Contact.findById(queryId);
    if (!query) {
      return res.status(404).json({ message: 'Query not found!' });
    }
    await query.remove();
    console.log('Query Deleted!');
    res.status(200).json({ message: 'Query deleted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error deleting the query' });
  }
};
