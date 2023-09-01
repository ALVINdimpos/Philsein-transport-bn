const User = require('../models/user');

// Get all users
exports.getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving users' });
  }
};

// Get user by ID
exports.getUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    res.status(200).json({ user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error retrieving user' });
  }
};

// Create user
exports.createUser = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const user = new User({
      name,
      email,
    });

    await user.save();

    res.status(200).json({
      message: 'User created successfully!',
      user,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while creating the user.' });
  }
};

// Update user
exports.updateUser = async (req, res, next) => {
  const userId = req.params.userId;
  const { name, email } = req.body;

  try {
    const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    res.status(200).json({ message: 'User updated!', user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while updating the user.' });
  }
};

// Delete user
exports.deleteUser = async (req, res, next) => {
  const userId = req.params.userId;

  try {
    const user = await User.findByIdAndRemove(userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found!' });
    }

    res.status(200).json({ message: 'User deleted!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred while deleting the user.' });
  }
};
