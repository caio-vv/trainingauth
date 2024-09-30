import Post from "../models/post-model.js";

export const postStore = async (req, res) => {
    try {
        const content = await Post.create(req.body)
        res.json(content)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const postDelete = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id).exec()
        res.json()
    } catch (error) {
        res.json(400)
    }
}

export const postIndex = async (req, res) => {
    try {
        const content = await Post.find(req.query).exec()
        res.json(content)
    } catch (error) {
        res.json(400)
    }
}

export const postShow = async (req, res) => {
    try {
        const content = await Post.findById(req.params.id).exec()
        res.json(content)
    } catch (error) {
        res.json(400)
    }
}