import React,{useState}  from "react";
import './App.css';
import './Card.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import MessageIcon from '@mui/icons-material/Message';
import ReplyIcon from '@mui/icons-material/Reply';
import DirectionsIcon from '@mui/icons-material/Directions';
import {BiUserCircle} from 'react-icons/bi';
import {BiImage} from 'react-icons/bi';

const myfunction=() => {
    alert("CLICKED");
} 
const msgclick=()=>{
    alert("clicked");
}

function Card({title,body}){
    const [likeCount, setLikeCount] = useState(50);
    const [dislikeCount, setDislikeCount] = useState(25);
    const [activeBtn, setActiveBtn] = useState("none");
    const handleLikeClick = () => {
        if (activeBtn === "none") {
          setLikeCount(likeCount + 1);
          setActiveBtn("like");
          return;
        }
     
        if (activeBtn === 'like'){
          setLikeCount(likeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "dislike") {
          setLikeCount(likeCount + 1);
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("like");
        }
      };
      const handleDisikeClick = () => {
        if (activeBtn === "none") {
          setDislikeCount(dislikeCount + 1);
          setActiveBtn("dislike");
          return;
        }
       
        if (activeBtn === 'dislike'){
          setDislikeCount(dislikeCount - 1);
          setActiveBtn("none");
          return;
        }
     
        if (activeBtn === "like") {
          setDislikeCount(dislikeCount + 1);
          setLikeCount(likeCount - 1);
          setActiveBtn("dislike");
        }
      };
    return(
        <div className="card-container">
            <div className="blk1">
            <div className="image-container">
                {/* <button type="submit"><img src={image}  height={50} width={50} alt='my img' onClick={myfunction}/></button> */}
                <BiUserCircle className="profile" onClick={myfunction}/>
            </div>
            <div className="txt">
                <h6><b>A Y</b></h6>
                <p className="subtitle">36 Added</p>
            </div>
            
              <BiImage className="img" onClick={myfunction}/>
            </div>
            <div className="card-content">
            <div className="card-body">
                <span className="need">Need Wearing Cloths(Urgent)</span><br></br>
                <span>Number of people:1</span><br></br>
                <span>Message:</span>
            </div>
            <div className="add">
            <button>
                <div className="dir">
                  <div className="row">
                    <div className="col-md-1">
                    <DirectionsIcon className="addlogo"/>
                      </div> 
                      <div className="col-md-11">
                      <p  className="addtxt"  onClick={msgclick}>34 A New Paccha peth Ashok Chowk,70 Feet Rd,New Paccha peth,Sakhar Peth,Solapur,Maharashtra 413006,India 327.62m away</p>
                      </div> 
                  </div>
                </div>
            </button>
            </div>
            </div>
            <div className="container">
            <div className="btn-container">
            <button
            id="bnt"
             className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
            onClick={handleLikeClick}
            >
            <span className="material-symbols-rounded"><ThumbUpIcon className="up"/></span>
            <span>{likeCount}</span>
            </button>
            <button
            id="bnt"
            className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
            onClick={handleDisikeClick}
            >
            <span className="material-symbols-rounded"><ThumbDownIcon className="down"/></span>
            <span>{dislikeCount}</span>
            </button>
            <button
            id="msg"
            className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
            onClick={msgclick}>
                <MessageIcon className="msg"/>
            </button>
            <div className="row">
              
              <div className="col-md-6">
              <div className="rply1" >
            <button
            className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
            onClick={msgclick}>
                <p className="rply2"><ReplyIcon className="rp"/><b>Mark As Helped</b></p>         
            </button>
            </div>
              </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Card