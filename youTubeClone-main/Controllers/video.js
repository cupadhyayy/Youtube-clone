// Importing the Video model from the Modals folder
const Video = require('../Modals/video');

// Controller to handle uploading a new video
exports.uploadVideo = async (req, res) => {
    try {
        // Destructuring the video details from the request body
        const { title, description, videoLink, videoType, thumbnail } = req.body;
        
        // Creating a new video entry with the provided details
        const videoUpload = new Video({ 
            user: req.user._id, // Setting the user who is uploading the video
            title, 
            description, 
            videoLink, 
            videoType, 
            thumbnail
        });

        // Saving the new video to the database
        await videoUpload.save();

        // Responding with a success message and the uploaded video details
        res.status(201).json({ success: "true", videoUpload });

    } catch (error) {
        // In case of an error, respond with a server error message
        res.status(500).json({ error: 'Server error' });
    }
}

// Controller to handle fetching all videos
exports.getAllVideo = async (req, res) => {
    try {
        // Fetching all videos and populating user details associated with each video
        const videos = await Video.find().populate('user', 'channelName profilePic userName createdAt');
         
        // Responding with a success message and the list of videos
        res.status(201).json({ success: "true", videos });

    } catch (error) {
        // In case of an error, respond with a server error message
        res.status(500).json({ error: 'Server error' });
    }
}

// Controller to handle fetching a single video by its ID
exports.getVideoById = async (req, res) => {
    try {
        // Extracting the video ID from the request parameters
        let { id } = req.params;

        // Fetching the video by its ID
        const video = await Video.findById(id);

        // Responding with a success message and the fetched video
        res.status(201).json({ success: "true", video });

    } catch (error) {
        // In case of an error, respond with a server error message
        res.status(500).json({ error: 'Server error' });
    }
}

// Controller to handle fetching videos by a specific user ID
exports.getAllVideoByUserID = async (req, res) => {
    try {
        // Extracting the user ID from the request parameters
        let { userId } = req.params;

        // Fetching all videos uploaded by the specified user and populating user details
        const video = await Video.find({ user: userId }).populate('user', 'channelName profilePic userName createdAt about');

        // Responding with a success message and the videos uploaded by the user
        res.status(201).json({ success: "true", video });

    } catch (error) {
        // In case of an error, respond with a server error message
        res.status(500).json({ error: 'Server error' });
    }
}
