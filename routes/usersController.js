const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId

const { UserModel } = require("../models/userModel")

router.get("/", (req, res) => {
  UserModel.find((err, docs) => {
    if (err) res.send("Error getting Users")
    else res.status(200).send(docs)
  })
});

router.get("/:id", (req, res) => {
  UserModel.findById(
    req.params.id,
    (err, docs) => {
      if (err) res.send("Error getting User")
      if (!docs) res.send("User not found") 
      else res.status(200).send(docs) 
    }
  )
})

router.post("/", (req, res) => {

  UserModel.findOne({ email: req.body.email }, (err, docs) => {
    if (err) console.log(err)
    if (docs) res.send("Used E-mail")
    else {
      const newUser = new UserModel({
        name: req.body.name,
        lastName: req.body.lastName,
        email: req.body.email,
      });

      newUser.save((err, docs) => {
        if (err) res.send("Error creating User " + err)
        else res.status(200).send("User created successfully")
      })
    }
  })
})

module.exports = router