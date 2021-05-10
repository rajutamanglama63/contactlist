const express = require("express");
const mongoose = require("mongoose");

const Contact = require("../model/contactSchema");

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const contacts = await Contact.find();

        res.status(200).json(contacts);
    } catch (error) {
        res.status(404).json({msg : error.message});
    }
});


router.post('/', async(req, res) => {
    const {name, address, contact} = req.body;

    const newContacts = new Contact({name, address, contact});

    try {
        await newContacts.save();

        res.status(200).json(newContacts);
    } catch (error) {
        res.status(404).json({msg : error.message});
    }
});

router.delete('/:id', async(req, res) => {
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No contact with ${id}`);
    }

    await Contact.findByIdAndDelete(id);

    res.json({message : "Contact deleted Successfully."});
});

router.patch('/:id', async(req, res) => {
    const {id} = req.params;

    const {name, address, contact} = req.body;

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`No contact with ${id}`);
    }

    const updatedContact = {name, address, contact, _id : id};

    await Contact.findByIdAndUpdate(id, updatedContact, {new : true});

    res.json(updatedContact);
});

module.exports = router;