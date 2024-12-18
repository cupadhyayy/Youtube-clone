// Importing necessary React hooks and dependencies
import React, { useEffect, useState } from 'react'; // useState and useEffect hooks
import './homePage.css'; // CSS file for styling the page
import { Link } from 'react-router-dom'; // Link component for navigation
import axios from 'axios'; // Axios library for HTTP requests

// HomePage functional component which accepts a prop sideNavbar
const HomePage = ({ sideNavbar }) => {
  // useState hook to manage data state (videos list)
  const [data, setData] = useState([]);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Axios GET request to fetch videos from the backend
    axios.get('http://localhost:4000/api/allVideo')
      .then(res => {
        // Storing the fetched data into the state
        console.log(res.data.videos); // Log the videos data to the console
        setData(res.data.videos); // Update the state with the fetched videos
      })
      .catch(err => {
        // Log any errors if the request fails
        console.log(err);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  // Options for categories displayed on the page
  const options = [
    "All", "Twenty20 Cricket", "Music", "Live", "Mixes", "Gaming", "Debates",
    "Coke Studio", "Democracy", "Dramas", "Comedy", "Fun", "Entertainment",
    "Football", "Ten Sports", "Democracy", "Dramas", "Comedy", "Fun", "Entertainment",
    "Football", "Ten Sports",
  ];

  return (
    <div className={sideNavbar ? 'homePage' : 'fullHomePage'}>
      {/* Render the categories/options */}
      <div className="homePage_options">
        {options.map((item, index) => (
          // Mapping through each option to display
          <div key={index} className="homePage_option">
            {item}
          </div>
        ))}
      </div>
      
      {/* Render the main video section */}
      <div className={sideNavbar ? "home_mainPage" : "home_mainPageWithoutLink"}>
        {/* Video links rendering */}
        <Link to={'/watch/9897'} className="youtube_Video" key={""}>
          <div className="youtube_thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">15.05</div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734466686/Build2_y2srez.jpg"
                alt="profile"
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">How to make youtube thumbnails</div>
              <div className="youtube_channelName">YoutubeTech</div>
              <div className="youtubeVideo_views">9.5K view</div>
            </div>
          </div>
        </Link>

        {/* Repeat similar structure for more videos */}
        <Link to={'/watch/9897'} className="youtube_Video" key={""}>
          <div className="youtube_thumbnailBox">
            <img
              src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734534446/Thumbnail2_uwv3pw.jpg"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">11.05</div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734466686/Build2_y2srez.jpg"
                alt="profile"
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">How to make AI youtube thumbnails</div>
              <div className="youtube_channelName">TechAI</div>
              <div className="youtubeVideo_views">4.5K view</div>
            </div>
          </div>
        </Link>

        {/* Additional video links */}
        <Link to={'/watch/9897'} className="youtube_Video" key={""}>
          <div className="youtube_thumbnailBox">
            <img
              src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">15.05</div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734466686/Build2_y2srez.jpg"
                alt="profile"
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">How to make youtube thumbnails</div>
              <div className="youtube_channelName">YoutubeTech</div>
              <div className="youtubeVideo_views">9.5K view</div>
            </div>
          </div>
        </Link>

        {/* More video links with similar structure */}
        <Link to={'/watch/9897'} className="youtube_Video" key={""}>
          <div className="youtube_thumbnailBox">
            <img
              src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734534446/Thumbnail2_uwv3pw.jpg"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">11.05</div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734466686/Build2_y2srez.jpg"
                alt="profile"
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">How to make AI youtube thumbnails</div>
              <div className="youtube_channelName">TechAI</div>
              <div className="youtubeVideo_views">4.5K view</div>
            </div>
          </div>
        </Link>

        {/* Additional video link example */}
        <Link to={'/watch/9897'} className="youtube_Video" key={""}>
          <div className="youtube_thumbnailBox">
            <img
              src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734466686/ReactsJs_ob9qsl.webp"
              alt="Thumbnail"
              className="youtube_thumbnailPic"
            />
            <div className="youtube_timingThumbnail">4.05</div>
          </div>
          <div className="youtubeTitleBox">
            <div className="youtubeTitleBoxProfile">
              <img
                src="https://res.cloudinary.com/dxhrv29c4/image/upload/c_thumb,w_200,g_face/v1734466686/Build2_y2srez.jpg"
                alt="profile"
                className="youtube_thumbnail_Profile"
              />
            </div>
            <div className="youtubeTitleBox_Title">
              <div className="youtube_videoTitle">Youtube clone using React</div>
              <div className="youtube_channelName">DevTech</div>
              <div className="youtubeVideo_views">7.5K view</div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

// Exporting the HomePage component as default for use in other parts of the application
export default HomePage;
