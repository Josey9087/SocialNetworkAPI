const { Schema, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (time) => moment(time).format("MM/DD/YYYY"),
    },
    username: {
      type: String,
      require: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
module.exports = reactionSchema;