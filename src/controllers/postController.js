const getPosts = async (req, res) => {
    try {
        //const posts = await Post.find();
        res.status(200).json({
            message: "Posts fetched successfully",
            data: [],
            success: true
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = {
    getPosts
}