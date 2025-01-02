const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getUserDetails = async (req, res) => {
    try{
        const id = req.params.id;
        const Users = await User.findById(id);
        if (!Users) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(Users);
    }catch(error){
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    getAllUsers,
    createUser,
    getUserDetails
};