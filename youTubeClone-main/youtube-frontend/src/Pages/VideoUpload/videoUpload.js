import React, { useState, useEffect } from 'react';
import './videoUpload.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';

const VideoUpload = () => {
    const [inputField, setInputField] = useState({
        "title": "",
        "description": "",
        "videoLink": "",
        "thumbnail": "",
        "videoType": ""
    });

    const [loader, setLoader] = useState(false);
    const [thumbnailUrl, setThumbnailUrl] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const navigate = useNavigate();

// Handle input field changes
const handleOnChangeInput = (event, name) => {
    setInputField({
        ...inputField, [name]: event.target.value
    });
};
 
// Upload image (thumbnail) or video
const uploadImage = async (e, type) => {
    setLoader(true);
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'youtube-clone'); //  Cloudinary preset

    try {
        const response = await axios.post(`https://api.cloudinary.com/v1_1/dxhrv29c4/${type}/upload`, data);
        if (type === 'thumbnail') {
            setThumbnailUrl(response.data.url); // Store the thumbnail URL
        } else if (type === 'video') {
            const videoResponse = await axios.post("", data);
            setVideoUrl(videoResponse.data.url); // Store the video URL
        }
        setLoader(false);
    } catch (err) {
        setLoader(false);
        console.error(err);
    }
};


 // Handle form submission
 const handleSubmitFunc = async () => {
    const { title, description, videoType } = inputField;

 // Basic validation
 if (!title || !description || !videoType || !thumbnailUrl || !videoUrl) {
    alert("Please fill all the fields!");
    return;
}

  // Prepare the data for submission
  const videoData = {
    title,
    description,
    videoType,
    thumbnail: thumbnailUrl,
    videoLink: videoUrl
};

try {
    const response = await axios.post('http://api-url/upload-video', videoData); 
    if (response.data.success) {
        alert('Video uploaded successfully!');
        navigate('/'); // Redirect after successful upload
    } else {
        alert('Error uploading video. Please try again.');
    }
} catch (err) {
    console.error(err);
    alert('Error uploading video. Please try again.');
}
};

 
    return (
        <div className='videoUpload'>
            <div className="uploadBox">
                <div className="uploadVideoTitle">
                    <YouTubeIcon sx={{ fontSize: "54px", color: "red" }} />
                    Upload Video
                </div>

                <div className="uploadForm">
                    
                <input type='text' value={inputField.title} onChange={(e)=>{handleOnChangeInput(e,"title")}} placeholder='Title of video' className='uploadFormInputs'/>
                <input type='text' value={inputField.title} onChange={(e)=>{handleOnChangeInput(e,"description")}} placeholder='Description' className='uploadFormInputs'/>
                <input type='text' value={inputField.title} onChange={(e)=>{handleOnChangeInput(e,"videoType")}} placeholder='Category' className='uploadFormInputs'/>
                <div>Thumbnail <input  type='file' accept="image/*"onChnage={(e)=>uploadImage(e,"image")}/></div>
                <div> Video <input  type='file' accept="video/mp4, video/webm, video/*" onChange={(e)=>uploadImage(e,"video")} />
                </div>


                <div className="uploadBtns">
                    <div className="uploadBtn-form" onClick={handleSubmitFunc}>
                        {loader ? <CircularProgress color="inherit" /> : 'Upload'}
                    </div>
                    <Link to={'/'} className="uploadBtn-form">Home</Link>
                </div>

                </div>

                </div>

                </div>
            
        
    );
};

export default VideoUpload;
        