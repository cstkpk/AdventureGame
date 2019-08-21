const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    playerName: { 
        type: String,
        required: true
    },
    playerChoices: {
        type: Array
        // type: [ String ]
    }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;