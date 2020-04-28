const express = require('express');
const router = express.Router();


//  @route        GET api/contacts
//  @desc         Get all user contacts
//  @access       Private
router.get('/',(req,res)=>{
    res.send('Get All contacts');
});

//  @route      POST api/contacts
//  @desc       Add new contact
//  @access     Private
router.post('/',(req,res)=>{
    res.send('Add contact');
});

//  @route      POST api/contacts:id
//  @desc       update contact
//  @access     Private
router.put('/:id',(req,res)=>{
    res.send('Update Contact');
});

//  @route      POST api/contacts:id
//  @desc       delete contact
//  @access     Private
router.delete('/:id',(req,res)=>{
    res.send('Delete Contact');
});




module.exports = router;
