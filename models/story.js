const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    playerName: { 
        type: String,
        required: true
    }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;