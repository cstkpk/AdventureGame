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
    },
    element1: {
        type: Boolean,
        default: false
    },
    box1: {
        type: Boolean,
        default: false
    },
    box2: {
        type: Boolean,
        default: false
    }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;