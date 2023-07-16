const mongoose = require("mongoose");

const reponseSchema = new mongoose.Schema({
  reclamation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "reclamation",
  },
  titre:{
    type: String,

  },
  Description:{
    type: String,

  },
  status:{
    type: String,

  },
  type: {
    type: String,
  },
  message: {
    type: String,
  },
  // Other fields for the reponse model
});

const reponse = mongoose.model("reponse", reponseSchema);

module.exports = reponse;
