const Comment = require('../Modals/comment');

// Function to add a comment
exports.addComment = async(req, res) => {
    try {
        // Destructuring video ID and message from the request body
        let { video, message } = req.body;

        // Create a new comment with user ID, video ID, and message
        const comment = new Comment({ user: req.user._id, video, message });

        // Save the comment to the database
        await comment.save();

        // Return a success response with the comment
        res.status(201).json({
            message: "Success",
            comment
        });

    } catch (error) {
        // Return an error response in case of server issues
        res.status(500).json({ error: 'Server error' });
    }
};

// Function to get comments by video ID
exports.getCommentByVideoId = async(req, res) => {
    try {
        // Destructuring videoId from the request params
        let { videoId } = req.params;

        // Fetching comments for the given video ID and populating user data
        const comments = await Comment.find({ video: videoId }).populate('user', 'channelName profilePic userName createdAt');

        // Return a success response with the comments
        res.status(200).json({
            message: "Success",
            comments
        });

    } catch (error) {
        // Return an error response in case of server issues
        res.status(500).json({ error: 'Server error' });
    }
};
