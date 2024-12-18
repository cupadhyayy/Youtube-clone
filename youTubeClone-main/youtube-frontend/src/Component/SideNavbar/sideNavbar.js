import React from 'react' // Importing React library
import './sideNavbar.css' // Importing custom CSS for the sidebar component
import HomeIcon from '@mui/icons-material/Home'; // Importing Home icon from Material UI
import VideocamIcon from '@mui/icons-material/Videocam'; // Importing Videocam icon from Material UI
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'; // Importing Subscriptions icon from Material UI
import ChevronRightIcon from '@mui/icons-material/ChevronRight'; // Importing ChevronRight icon for expanding section
import RecentActorsIcon from '@mui/icons-material/RecentActors'; // Importing RecentActors icon from Material UI
import HistoryIcon from '@mui/icons-material/History'; // Importing History icon from Material UI
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'; // Importing PlaylistAdd icon from Material UI
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined'; // Importing SmartDisplayOutlined icon from Material UI
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined'; // Importing WatchLaterOutlined icon from Material UI
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined'; // Importing ThumbUpAltOutlined icon from Material UI
import ContentCutIcon from '@mui/icons-material/ContentCut'; // Importing ContentCut icon from Material UI

const SideNavbar = ({sideNavbar}) => {
    return (
        <div className={sideNavbar?"home-sideNavbar":"homeSideNavbarHide"}> {/* Conditional class to show/hide the sidebar based on 'sideNavbar' prop */}
            
            {/* Sidebar Top Section */}
            <div className="home_sideNavbarTop">
                
                {/* Home Option */}
                <div className={`home_sideNavbarTopOption`} >
                    <HomeIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Home</div>
                </div>

                {/* Shorts Option */}
                <div className={`home_sideNavbarTopOption`} >
                    <VideocamIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Shorts</div>
                </div>

                {/* Subscription Option */}
                <div className={`home_sideNavbarTopOption`} >
                    <SubscriptionsIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Subscription</div>
                </div>
            </div>

            {/* Sidebar Middle Section - Personal Options */}
            <div className="home_sideNavbarMiddle">
                
                {/* "You" Section with expandable Chevron */}
                <div className={`home_sideNavbarTopOption`} >
                    <div className="home_sideNavbarTopOptionTitle" >You</div>
                    <ChevronRightIcon />
                </div>
                
                {/* Your Channel Option */}
                <div className={`home_sideNavbarTopOption`} >
                    <RecentActorsIcon/>
                    <div className="home_sideNavbarTopOptionTitle" >Your Channel</div>
                </div>

                {/* History Option */}
                <div className={`home_sideNavbarTopOption`} >
                    <HistoryIcon/>
                    <div className="home_sideNavbarTopOptionTitle" >History</div>
                </div>
                
                {/* Playlist Option */}
                <div className={`home_sideNavbarTopOption`} >
                    <PlaylistAddIcon />
                    <div className="home_sideNavbarTopOptionTitle" >Playlist</div>
                </div>

                {/* Your Videos Option */}
                <div className={`home_sideNavbarTopOption `} >
                    <SmartDisplayOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your videos</div>
                </div>

                {/* Watch Later Option */}
                <div className={`home_sideNavbarTopOption `}>
                    <WatchLaterOutlinedIcon />
                    <div className="home_sideNavbarTopOptionTitle">Watch later</div>
                </div>

                {/* Liked Videos Option */}
                <div className={`home_sideNavbarTopOption }`}>
                    <ThumbUpAltOutlinedIcon/>
                    <div className="home_sideNavbarTopOptionTitle">Linked Videos</div>
                </div>
                
                {/* Clips Option */}
                <div className={`home_sideNavbarTopOption }`}>
                    <ContentCutIcon />
                    <div className="home_sideNavbarTopOptionTitle">Your clips</div>
                </div>

            </div>

            {/* Sidebar Middle Section - Subscription Channels */}
            <div className="home_sideNavbarMiddle">
                
                {/* Subscription Header */}
                <div className="home_sideNavbarTopOption">
                    <div className="home_sideNavbarTopOptionTitleHeader">Subscription</div>
                </div>

                {/* Subscription Channel 1 */}
                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://www.medianews4u.com/wp-content/uploads/2020/04/Aaj-Tak-2.jpg' />
                    <div className="home_sideNavbarTopOptionTitle">Aaj Tak</div>
                </div>

                {/* Subscription Channel 2 */}
                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://th.bing.com/th/id/R.bce6ed4af85677ce3b6908ac7e8e631b?rik=DFwXRhY0pZxYIg&pid=ImgRaw&r=0' />
                    <div className="home_sideNavbarTopOptionTitle">The LallanTop</div>
                </div>

                {/* Subscription Channel 3 */}
                <div className="home_sideNavbarTopOption">
                    <img className='home_sideNavbar_ImgLogo' src='https://th.bing.com/th/id/OIP.Ptvb889e_arCEj1IgCROgAHaHa?rs=1&pid=ImgDetMain' />
                    <div className="home_sideNavbarTopOptionTitle">NDTV India</div>
                </div>

            </div>
        </div>
    )
}

export default SideNavbar // Exporting the SideNavbar component for use in other parts of the app
