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
    moon: {
        type: Boolean,
        default: false
    },
    mercury: {
        type: Boolean,
        default: false
    },
    box1: {
        type: Boolean,
        default: false
    },
    venus: {
        type: Boolean,
        default: false
    },
    shipDestruction: {
        type: Boolean,
        default: false
    },
    mars: {
        type: Boolean,
        default: false
    },
    dustStorm: {
        type: Boolean,
        default: false
    },
    jupiter: {
        type: Boolean,
        default: false
    },
    saturn: {
        type: Boolean,
        defaault: false
    },
    box2: {
        type: Boolean,
        default: false
    },
    uranus: {
        type: Boolean,
        default: false
    },
    freeze: {
        type: Boolean,
        default: false
    },
    neptune: {
        type: Boolean,
        default: false
    },
    pluto: {
        type: Boolean,
        default: false
    },
    land: {
        type: Boolean,
        default: false
    }
});

const Story = mongoose.model("Story", storySchema);

module.exports = Story;