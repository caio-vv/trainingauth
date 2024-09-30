import { Schema, model } from "mongoose";

const postSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    User:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const Post = model("Post", postSchema);

export default Post;