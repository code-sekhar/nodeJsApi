const e = require('express');
const mongoose = require('mongoose');
const { type } = require('os');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    add: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
    