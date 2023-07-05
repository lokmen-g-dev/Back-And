const express = require("express");
const router = express.Router();
const reclamation = require("../models/reclamation") ;
const Type = require("../models/type");


router.get("/autre", async (req, res) => {
    try {
      const types = await reclamation.find({ type: "autre" });
      res.send(types);
    } catch (err) {
      res.send({ message: err });
    }
  });
  

router.get("/type", async (req, res) => {
    try {
        const types = await Type.find();
        res.send(types);
    } catch (err) {
        res.send({ message: err });
    }
});
////delete

router.delete("/type/:id", async (req, res) => {
    try {
      const type = await Type.findById(req.params.id);
      console.log(type.type);
  
      if (!type) {
        return res.send({ message: "Type not found." });
      }
  
      // Retrieve all reclamations associated with the type
      const reclamations = await reclamation.find({ type: type.type });
      console.log(reclamations);
  
      // Update the reclamations with the new type value or remove the type reference
      const updatePromises = reclamations.map(async (reclamation) => {
        reclamation.type = 'autre'; // Or assign a different type value
        await reclamation.save();
      });
      console.log(updatePromises);
  
      // Wait for all update operations to complete
    
  
      // Delete the type
      const deletedType = await Type.findByIdAndDelete(req.params.id);
      if (deletedType) {
        return res.send({ message: "Type deleted successfully." });
      } else {
        return res.send({ message: "Type not found." });
      }
    } catch (err) {
      return res.send({ message: err });
    }
  });
  
///Ajouter une reclamation 
router.post("/type", async(req,res)=>{
        const Types = await new Type({
       type:req.body.type
       
     
    })
   
    try{
        
        const saveTypes = await Types.save();
   
            res.send( saveTypes);
    }catch(err){
        res.send({message:err})
    }
    });

   
module.exports=router;