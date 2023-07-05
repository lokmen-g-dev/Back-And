const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };
const addSchema = new mongoose.Schema({
 
    reponse: {
      type: String
      
    }
    
    
 
    
  },opts);
  
  const reponse = mongoose.model("reponse", addSchema);

  module.exports = reponse;