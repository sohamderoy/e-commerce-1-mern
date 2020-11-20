const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 32,
        unique: true
    }
    
}, { timestamps: true }); // records the time whenever a new entry is made through the schema

module.exports = mongoose.model("Category", categorySchema);