const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProductSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },

},{
    timestamps:true
});
module.exports = mongoose.model("userproduct", userProductSchema);
