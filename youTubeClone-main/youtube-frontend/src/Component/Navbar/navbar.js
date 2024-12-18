import React, { useState, useEffect } from 'react';
import './navbar.css';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger menu icon
import SearchIcon from '@mui/icons-material/Search'; // Search icon
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice'; // Voice search icon
import YouTubeIcon from '@mui/icons-material/YouTube'; // YouTube logo icon
import VideoCallIcon from '@mui/icons-material/VideoCall'; // Video upload icon
import NotificationsIcon from '@mui/icons-material/Notifications'; // Notifications icon
import PersonIcon from '@mui/icons-material/Person'; // Profile icon
import { Link, useNavigate } from 'react-router-dom'; // React Router hooks for navigation
import Login from '../Login/login'; // Login component
import axios from 'axios'; // Axios for making HTTP requests

// Navbar component
const Navbar = ({ setSideNavbarFunc, sideNavbar }) => {
  // State hooks to manage user profile, modal visibility, login state, and user authentication
  const [userPic, setUserPic] = useState("https://th.bing.com/th/id/OIP.Wy2uo_y-ttULYs4chLmqSAAAAA?rs=1&pid=ImgDetMain"); // Default profile picture
  const [navbarModal, setNavbarModal] = useState(false); // State for modal visibility
  const [login, setLogin] = useState(false); // State for controlling login modal
  const [isLogedIn, setIsLogedIn] = useState(false); // State for login status
  const navigate = useNavigate(); // Hook for navigation

  // Toggles the visibility of the navbar modal
  const handleClickModal = () => {
    setNavbarModal(prev => !prev); 
  };

  // Toggles the visibility of the side navbar
  const sideNavbarFunc = () => {
    setSideNavbarFunc(!sideNavbar);
  };

  // Navigates to the user's profile page
  const handleProfile = () => {
    let userId = localStorage.getItem("userId");
    navigate(`/user/${userId}`); // Dynamically navigate to the user's profile
    setNavbarModal(false); // Close the modal
  };

  // Closes the login modal
  const setLoginModal = () => {
    setLogin(false);
  };

  // Handles the click on logout/login options in the modal
  const onClickOfPopUpOption = (button) => {
    setNavbarModal(false); // Close the modal

    if (button === "login") {
      setLogin(true); // Show login modal
    } else {
      localStorage.clear(); // Clear local storage
      getLogoutFun(); // Call logout function
      setTimeout(() => {
        navigate('/'); // Navigate to the home page
        window.location.reload(); // Reload the page
      }, 2000);
    }
  };

  // Function to handle logout request to the server
  const getLogoutFun = async () => {
    try {
      await axios.post("http://your-server-url:4000/auth/logout", {}, { withCredentials: true }); // Make logout request
      console.log("Logout successful");
    } catch (err) {
      console.log("Logout error: ", err); // Log error if logout fails
    }
  };

  // useEffect to check if the user is logged in and set the profile picture if available
  useEffect(() => {
    let userProfilePic = localStorage.getItem("userProfilePic");
    setIsLogedIn(localStorage.getItem("userId") !== null); // Check if user is logged in
    if (userProfilePic !== null) {
      setUserPic(userProfilePic); // Set user profile picture
    }
  }, []);

  return (
    <div className='navbar'>
      {/* Navbar Left Section */}
      <div className="navbar-left">
        <div className="navbarHamberger" onClick={sideNavbarFunc}>
          <MenuIcon sx={{ color: "white" }} /> {/* Hamburger icon to toggle side navbar */}
        </div>

        <Link to={'/'} className="navbar_youtubeImg">
          <YouTubeIcon sx={{ fontSize: "34px" }} className='navbar_youtubeImage' /> {/* YouTube logo */}
          <div className='navbar_utubeTitle'>YouTube</div>
        </Link>
      </div>

      {/* Navbar Middle Section */}
      <div className="navbar-middle">
        <div className="navbar_searchBox">
          <input type='text' placeholder='Search' className='navbar_searchBoxInput' /> {/* Search bar */}
          <div className="navbar_searchIconBox">
            <SearchIcon sx={{ fontSize: "28px", color: "white" }} /> {/* Search icon */}
          </div>
        </div>

        <div className="navbar_mike">
          <KeyboardVoiceIcon sx={{ color: "white" }} /> {/* Voice search icon */}
        </div>
      </div>

      {/* Navbar Right Section */}
      <div className="navbar-right">
        <Link to={'/upload-video'}>
          <VideoCallIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} /> {/* Video upload icon */}
        </Link>

        <NotificationsIcon sx={{ fontSize: "30px", cursor: "pointer", color: "white" }} /> {/* Notifications icon */}
        <img onClick={handleClickModal} src={userPic} className='navbar-right-logo' alt='Logo' /> {/* User profile picture, clicking opens modal */}

        {/* Navbar Modal with options */}
        {navbarModal &&
          <div className='navbar-modal'>
            <div className="navbar-modal-option" onClick={handleProfile}>
              <i className="person-icon" /> {/* Icon for profile option */}
              Profile
            </div>

            <div className="navbar-modal-option" onClick={() => onClickOfPopUpOption("logout")}>Logout</div> {/* Logout option */}
            <div className="navbar-modal-option" onClick={() => onClickOfPopUpOption("login")}>Login</div> {/* Login option */}
          </div>
        }
      </div>

      {/* Conditionally render Login modal */}
      {login && <Login setLoginModal={setLoginModal} />}
    </div>
  );
};

export default Navbar;
