const express = require("express");
const router  = express.Router();
const Job     = require("../models/Job");
const { Model } = require("sequelize");

// add job via post

router.get( "/add", (req,res) =>{
    res.render("add");
});

router.post( "/add" , (req,res) => {
    
    let {title,salary,company,description,email,new_job}  = req.body;

    //insert
    Job.create({
        title,
        salary,
        company,
        description,
        email,
        new_job
    })
    .then( () => res.redirect("/"))
    .catch( err => console.log(err))
});

module.exports = router