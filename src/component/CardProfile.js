import React from 'react'
import "./CardProfile.css"
import image from "./krishna.jpeg"

export default function CardProfile(){
    return(
        <div className="profile-card">
            <img src={image} className="avatar" alt=""></img>
            <h1> Krishna Falmaasa Mudya</h1>
            <h3> 21120120130070 </h3>
        </div>
    )
}