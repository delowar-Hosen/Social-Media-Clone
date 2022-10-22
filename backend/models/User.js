const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, "First Name Is Required"],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, "Last Name Is Required"],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, "userName Is Required"],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email Is Required"],
      trim: true,
      text: true,
    },
    password: {
      type: String,
      required: [true, "Password Is Required"],
    },
    picture: {
      type: String,
      trim: true,
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, "Gender Is Required"],
      trim: true,
    },
    bYear: {
      type: Number,
      required: [true, "BirthYear Is Required"],
      trim: true,
    },
    bMonth: {
      type: Number,
      required: [true, "BirthMonth Is Required"],
      trim: true,
    },
    bDay: {
      type: Number,
      required: [true, "BirthDay Is Required"],
      trim: true,
    },
    varified: {
      type: Boolean,
      default: false,
    },
    friends: {
      type: Array,
      default: [],
    },
    following: {
      type: Array,
      default: [],
    },
    follwers: {
      type: Array,
      default: [],
    },
    requiests: {
      type: Array,
      default: [],
    },
    search: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    details: {
      bio: {
        type: String,
      },
      otherName: {
        type: String,
      },
      job: {
        type: String,
      },
      currentCity: {
        type: String,
      },
      workplace: {
        type: String,
      },
      hometown: {
        type: String,
      },
      relationShip: {
        type: String,
        enum: ["single", "married", "divorced", "in love"],
      },
      relationShip: {
        type: String,
      },
      savedPost: [
        {
          post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "post",
          },
          saveAt: {
            type: Date,
            default: new Date(),
          },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
