const { Schema, model } = require("mongoose");
const reactions = require("./Reactions");
const moment = require("moment");

const thoughtsSchema = new Schema(
    {
        thoughts_text: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (time) => moment(time).format("MM/DD/YYYY"),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactions],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);
thoughtsSchema
    .virtual("reactionCount")
    .get(function () {
        return this.reactions.length;
    });

const Thoughts = model("Thoughts", thoughtsSchema);

module.exports = Thoughts;