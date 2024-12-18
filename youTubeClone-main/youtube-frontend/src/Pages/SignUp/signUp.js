import React, { useState } from 'react';
import './signUp.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const SignUp = () => {
    const [uploadedImageUrl, setUploadedImageUrl] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain");
    const [signUpFields, setSignUpFields] = useState({ "channelName": "", "userName": "", "password": "", "about": "", "profilePic": "" });
    const [progressBar, setProgressBar] = useState(false);
    const navigate = useNavigate();

    // Handle input field changes
    const handleInputField = (event, name) => {
        setSignUpFields({
            ...signUpFields, 
            [name]: event.target.value
        });
    };

    // Image upload to Cloudinary
    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'youtube-clone'); // cloudinary preset

        try {
            setProgressBar(true);
            const response = await axios.post("https://api.cloudinary.com/v1_1/dxhrv29c4/image/upload", data);
            setProgressBar(false);

            const imageUrl = response.data.url;
            setUploadedImageUrl(imageUrl);
            setSignUpFields({
                ...signUpFields,
                profilePic: imageUrl
            });
        } catch (err) {
            setProgressBar(false);
            toast.error("Image upload failed.");
            console.error(err);
        }
    };

    // Handle Sign Up
    const handleSignUp = async () => {
        const { channelName, userName, password, about, profilePic } = signUpFields;

        if (!channelName || !userName || !password || !about || !profilePic) {
            toast.error("All fields are required.");
            return;
        }

        try {
            const response = await axios.post("http://your-api-url/signup", {
                channelName, userName, password, about, profilePic
            });

            if (response.data.success) {
                toast.success("Sign up successful!");
                navigate('/'); // Redirect to home page after successful signup
            } else {
                toast.error(response.data.message || "Sign up failed.");
            }
        } catch (err) {
            toast.error("Something went wrong. Please try again.");
            console.error(err);
        }
    };

    return (
        <div className='signUp'>
            <div className="signup_card">
                <div className="signUp_title">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    Sign Up
                </div>

                <div className="signUp_Inputs">
                    <input 
                        type='text' 
                        className='signUp_Inputs_inp'
                        value={signUpFields.channelName} 
                        onChange={(e) => handleInputField(e, "channelName")} 
                        placeholder='Channel name' 
                    />
                    <input 
                        type='text' 
                        className='signUp_Inputs_inp'
                        value={signUpFields.userName} 
                        onChange={(e) => handleInputField(e, "userName")} 
                        placeholder='User name' 
                    />
                    <input 
                        type='password' 
                        className='signUp_Inputs_inp'
                        value={signUpFields.password} 
                        onChange={(e) => handleInputField(e, "password")} 
                        placeholder='Password' 
                    />  
                    <input 
                        type='text' 
                        className='signUp_Inputs_inp'
                        value={signUpFields.about} 
                        onChange={(e) => handleInputField(e, "about")} 
                        placeholder='About Your Channel' 
                    />

                    <div className="image_upload_signup">
                        <input 
                            type='file' 
                            onChange={(e) => uploadImage(e)} 
                        />
                        <div className='image_upload_signup_div'>
                            <img className='image_default_signUp' src={uploadedImageUrl} alt="Profile" />
                        </div>
                    </div>

                    <div className="signUpBtns">
                        <div className="signUpBtn" onClick={handleSignUp}>Sign Up</div>
                        <Link to={'/'} className="signUpBtn">Home Page</Link>
                    </div>

                    {progressBar && (
                        <Box sx={{ width: '100%' }}>
                            <LinearProgress />
                        </Box>
                    )}
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;
