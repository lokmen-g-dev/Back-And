const mongoose= require("mongoose");
const opts = { toJSON: { virtuals: true } };
const addSchema = new mongoose.Schema({
 
    type: {
      type: String
      
    }
    
  },opts);
  
  const type = mongoose.model("type", addSchema);

  module.exports = type;