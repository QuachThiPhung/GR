const mongoose = require ('mongoose')

const residentSchema = mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, default: "default category description" },
    code: {type: String, required: true, unique: true }
});

residentSchema.index({ description: 1 })
const Resident = mongoose.model("Resident", residentSchema);
module.exports = Resident;