import React, { useState, useEffect } from 'react'
import './profile.css';
import SideNavbar from '../../Component/SideNavbar/sideNavbar';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Profile = ({ sideNavbar }) => {
    const { id } = useParams();
    const [data, setData] = useState([]);
    const [user, setUser] = useState(null);
    const fetchProfileData = async () => {
        

    }
    useEffect(() => {
        fetchProfileData()
    }, [])

    return (
        <div className='profile'>
            <SideNavbar sideNavbar={sideNavbar} />

            <div className={sideNavbar?"profile_page":"profile_page_inactive"}> 
                
             <div className="profile_top_section">
                    <div className="profile_top_section_profile">
                        <img className='profile_top_section_img' src={"https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734197325/samples/outdoor-woman.jpg" } alt=" " />
                    </div>
                    <div className="profile_top_section_About">
                    <div className="profile_top_section_About">Natural Env</div>
                    <div className="profile_top_section_info">
                        @User1 . 3 videos
                    
                </div>
                <div className="profile_top_section_info">
                Natural environment channel
                </div>
                
            


                <div className="profile_videos">
                    <div className="profile_videos_title">Videos &nbsp; <ArrowRightIcon /></div>

                    <div className="profileVideos">

                    {/* -------- div for a video --------- */}
                    <Link to={'/watch/8998'}  className="profileVideo_block">
                    <div className="profileVideo_block_thumbnail">
                     <img className='profileVideo_block_thumbnail_img' src="https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734197318/samples/landscapes/beach-boat.jpg" />
                    </div>
                    
                    <div className="profileVideo_block_detail">
                    <div className="profileVideo_block_detail_name">Natural environment </div>
                    <div className="profileVideo_block_detail_about">Create at 2024-12-20</div>
                    </div>
                    </Link>

                     {/* -------- div for a video --------- */}
                     <Link to={'/watch/8998'}  className="profileVideo_block">
                    <div className="profileVideo_block_thumbnail">
                     <img className='profileVideo_block_thumbnail_img' src="https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734197318/samples/landscapes/beach-boat.jpg" />
                    </div>
                    
                    <div className="profileVideo_block_detail">
                    <div className="profileVideo_block_detail_name">Natural environment </div>
                    <div className="profileVideo_block_detail_about">Create at 2024-12-20</div>
                    </div>
                    </Link>

                     {/* -------- div for a video --------- */}
                     <Link to={'/watch/8998'}  className="profileVideo_block">
                    <div className="profileVideo_block_thumbnail">
                     <img className='profileVideo_block_thumbnail_img' src="https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1734197318/samples/landscapes/beach-boat.jpg" />
                    </div>
                    
                    <div className="profileVideo_block_detail">
                    <div className="profileVideo_block_detail_name">Natural environment </div>
                    <div className="profileVideo_block_detail_about">Create at 2024-12-20</div>
                    </div>
                    </Link>

                    </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile