// Import necessary dependencies
import React, { useState } from 'react'
import './login.css'; // Import styles for the login page
import YouTubeIcon from '@mui/icons-material/YouTube'; // Import YouTube icon for branding
import { Link } from 'react-router-dom'; // Import Link for navigation between routes
import axios from 'axios'; // Import axios for making HTTP requests
import { toast, ToastContainer } from 'react-toastify' // Import ToastContainer for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast styling

// Importing Box and LinearProgress components from Material UI for loader functionality
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

// Login functional component definition
const Login = ({ setLoginModal }) => {
    // State to manage input fields (username, password)
    const [loginField, setLoginField] = useState({ "userName": "", "password": "" });

    // State to manage loading indicator while logging in
    const [loader, setLoader] = useState(false);

    // Function to handle input field changes
    const handleOnChangeInput = (event, name) => {
        // Update the loginField state when the input fields change
        setLoginField({
            ...loginField, [name]: event.target.value
        })
    }

    // Function to handle login action
    const handleLoginFun = async () => {
        setLoader(true); // Set loader state to true when starting the login process
        
        // Send POST request to the backend with login credentials
        axios.post("http://localhost:4000/auth/login", loginField, { withCredentials: true })
            .then((resp) => {
                setLoader(false); // Set loader state to false when login is successful
                
                // Store the received token and user details in localStorage
                localStorage.setItem("token", resp.data.token);
                localStorage.setItem("userId", resp.data.user._id);
                localStorage.setItem("userProfilePic", resp.data.user.profilePic);
                
                // Reload the page after successful login
                window.location.reload();
            })
            .catch((err) => {
                // Display error toast notification if login fails
                toast.error("Invalid Credentials");
                console.log(err); // Log error for debugging
                setLoader(false); // Set loader state to false if login fails
            });
    }

    return (
        <div className='login'>
            <div className="login_card">
                {/* Title Card with YouTube Icon */}
                <div className="titleCard_login">
                    <YouTubeIcon sx={{ fontSize: "54px" }} className='login_youtubeImage' />
                    Login
                </div>

                {/* Input fields for username and password */}
                <div className="loginCredentials">
                    <div className="userNameLogin">
                        <input 
                            className='userNameLoginUserName' 
                            value={loginField.userName} 
                            onChange={(e) => handleOnChangeInput(e, "userName")} 
                            placeholder='UserName' 
                            type='text' 
                        />
                    </div>
                    <div className="userNameLogin">
                        <input 
                            className='userNameLoginUserName' 
                            value={loginField.password} 
                            onChange={(e) => handleOnChangeInput(e, "password")} 
                            placeholder='Password' 
                            type='password' 
                        />
                    </div>
                </div>

                {/* Login buttons */}
                <div className="login_buttons">
                    {/* Login button that triggers the handleLoginFun function */}
                    <div className="login-btn" onClick={handleLoginFun}>Login</div>
                    {/* Sign Up link which navigates to the signup page */}
                    <Link to={'/signup'} onClick={() => setLoginModal()} className="login-btn">SignUp</Link>
                    {/* Cancel button that closes the login modal */}
                    <div className="login-btn" onClick={() => setLoginModal()}>Cancel</div>
                </div>
            </div>

            {/* ToastContainer to display notifications */}
            <ToastContainer />
        </div>
    )
}

export default Login; // Export the Login component for use in other parts of the app
