const express = require("express");
const router = express.Router();
const Reclamation = require("../models/reclamation");
const Reponse = require("../models/reponse");

router.post("/reclamation/:id", async (req, res) => {
  try {
    const { id } = req.params; // Get the reclamation ID from the URL parameter
    const { message } = req.body; // Get the message from the request body

    // Check if the reclamation exists
    const reclamation = await Reclamation.findById(id);
    if (!reclamation) {
      return res.status(404).json({ error: "Reclamation not found" });
    }

    // Create a new reponse associated with the reclamation
    const newReponse = new Reponse({
      reclamation: reclamation._id,
      titre: reclamation.titre, // Include the titre from the reclamation
      Description: reclamation.Description, // Include the titre from the reclamation
      type: reclamation.type, // Include the titre from the reclamation
      status: reclamation.status, // Include the titre from the reclamation
      message,
    });

    // Save the new reponse document
    const savedReponse = await newReponse.save();

    res.status(201).json(savedReponse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});



/**** get all reponse */

router.get("/allreponse",async(req,res)=>{
  try{
      const ajouter= await Reponse.find();
      res.send(ajouter);
  }catch(err){res.json({message:err})}
  })

module.exports = router;
