import React, { useState, useEffect } from 'react'
import './video.css';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {toast,ToastContainer} from 'react-toastify'
const Video = () => {
    const [message, setMessage] = useState("");
    const [data, setData] = useState(null);
    const [videoUrl, setVideoURL] = useState("");
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    const fetchVedioById = async () => {
        await axios.get(`http://localhost:4000/api/getVideoById/${id}`).then((response) => {
            console.log(response.data.video);
            setData(response.data.video)
            setVideoURL(response.data.video.videoLink)
        }).catch(err => {
            console.log(err);
        })
    }

    const getCommentByVideoId = async () => {
        await axios.get(`http://localhost:4000/commentApi/comment/${id}`).then((response) => {
            console.log(response);
            setComments(response.data.comments)
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        fetchVedioById();
        getCommentByVideoId();
    }, [])

    const handleComment = async()=>{
        const body = {
            "message":message,
            "video":id
        }
        await axios.post('http://localhost:4000/commentApi/comment',body, { withCredentials: true }).then((resp)=>{
            console.log(resp)
            const newComment = resp.data.comment;
            setComments([newComment,...comments]);
            setMessage("")
        }).catch(err=>{
            toast.error("Please Login First to comment")
        })
    }
    return (
        <div className='video'>
            <div className="videoPostSection">
                <div className="video_youtube">
                   
                     <video width="400" controls autoPlay className='video_youtube_video'>

                        <source src={"https://res.cloudinary.com/dxhrv29c4/video/upload/v1/samples/cld-sample-video.mp4?_s=vp-2.1.0"} type="video/mp4" />
                        <source src={"https://res.cloudinary.com/dxhrv29c4/video/upload/v1/samples/cld-sample-video.mp4?_s=vp-2.1.0"} type="video/webm" />

                        Your browser does not support the video tag.
                        
                    </video>

                </div>





                <div className="video_youtubeAbout">
                    <div className="video_uTubeTitle">{"Fun for Beginners"}</div>

                    <div className="youtube_video_ProfileBlock">
                        <div className="youtube_video_ProfileBlock_left">
                            <Link to={'/user/7868'} className="youtube_video_ProfileBlock_left_img">
                                <img className='youtube_video_ProfileBlock_left_image' src={"https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734197325/samples/coffee.jpg"} />
                            </Link>
                            <div className="youtubeVideo_subsView">
                                <div className="youtubePostProfileName"> {"Dance for fun" } </div>
                                <div className="youtubePostProfileSubs">{"2024-12-08"}</div>
                            </div>
                            <div className="subscribeBtnYoutube">Subscribe</div>
                        </div>

                        <div className="youtube_video_likeBlock">
                        <div className="youtube_video_likeBlock_Like">
                        <ThumbUpOutlinedIcon/>
                         <div className='youtube_video_likeBlock_NoOfLikes'>{32}</div>
                        </div>
            
                        
                        <div className="youtubeVideoDivider"></div>
                        <div className="youtube_video_likeBlock_Like">
                        < ThumbDownAltOutlinedIcon/>
                        <div>
                       </div>


                        </div>

                        </div>
                    </div>
                  
                    <div className="youtube_video_About">
                        <div>2024-12-09</div>
                        <div>This is the nice video</div>
                    </div>


                </div>

                    <div className="youtubeCommentSection">
                    <div className="youtubeCommentSectionTitle">1 Comments</div>

                    <div className="youtubeSelfComment">
                    <img className='video_youtubeSelfCommentProfile' src="https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734197324/samples/smile.jpg" />
                    </div>
                    <div className="addComment">
                    <input type='text' value={message} onChange={(e)=>{setMessage(e.target.value)}} className='addAcommentInput' placeholder='Add a comment'  />
                    </div>
                    <div className="cancelSubmitComment">
                    <div className="cancelComment" >Cancel</div>
                    <div className="cancelComment" >Comment</div>
                    </div>

                    
                    
                    <div className="youtubeOthersComments">

                       
                                    <div className="youtubeSelfComment">
                                        <img className='video_youtubeSelfCommentProfile' src={ "https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734197317/samples/people/smiling-man.jpg"} />
                                        <div className="others_commentSection">
                                        <div className="others_commentSectionHeader">
                                        <div className="channelName_comment">Tech ban</div>
                                        <div className="commentTimingOthers">2024-12-23</div>
                                        </div>
                                        <div className="others_commentSection">
                                            This is the good Dance
                                        </div>

                                        </div>
                                    </div>
                                    <div className="youtubeSelfComment">
                                        <img className='video_youtubeSelfCommentProfile' src={ "https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734197317/samples/people/smiling-man.jpg"} />
                                        <div className="others_commentSection">
                                        <div className="others_commentSectionHeader">
                                        <div className="channelName_comment">Tech im</div>
                                        <div className="commentTimingOthers">2024-12-08</div>
                                        </div>
                                        <div className="others_commentSection">
                                            This is the good Dance
                                        </div>

                                        </div>
                                    </div>
                                    <div className="youtubeSelfComment">
                                        <img className='video_youtubeSelfCommentProfile' src={ "https://res.cloudinary.com/dxhrv29c4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1734197317/samples/people/smiling-man.jpg"} />
                                        <div className="others_commentSection">
                                        <div className="others_commentSectionHeader">
                                        <div className="channelName_comment">TechHun</div>
                                        <div className="commentTimingOthers">2024-12-20</div>
                                        </div>
                                        <div className="others_commentSection">
                                            This is the good Dance
                                        </div>

                                        </div>
                                    </div>



                    </div>
                </div>
            </div>

            < div className="videoSuggestions">
                Video Sugesstions
        
                

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>

                <div className="videoSuggestionsBlock">
                    <div className="video_suggetion_thumbnail">
                        <img src="https://th.bing.com/th/id/OIP.8gLtXrl4KYPfPA6QyMnlUwHaEK?w=304&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className='video_suggetion_thumbnail_img' />
                    </div>
                    <div className="video_suggetions_About">
                        <div className="video_suggetions_About_title">T20 2024 Worldcup Final IND vs SA Last 5 overs #cricket #india</div>
                        <div className="video_suggetions_About_Profile">Cricket 320</div>
                        <div className="video_suggetions_About_Profile">136K views . 1 day ago</div>
                    </div>
                </div>
            </div>

            <ToastContainer/>

        </div>
    )
}

export default Video