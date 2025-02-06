import { useState } from "react";

export default function LikeButtonn() {
    let [isLiked, setIsLiked]  = useState(false);
    let [clicks, setClicks]  = useState(0);
    let toggleLike = () =>{
        // console.log("We are here going to togggle");
        // let newVal = !isLiked;
        // console.log(newVal);
        setIsLiked(!isLiked);
        setClicks(clicks+1);
    };

    let likeStyle = {color: "red"};

    return (
        <div>
            <p>Clicks = {clicks}</p>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className="fa-solid fa-heart" style={likeStyle}></i> // Filled heart when liked
                ) : (
                    <i className="fa-regular fa-heart"></i> // Regular heart when not liked
                )}
            </p>
        </div>
);
}