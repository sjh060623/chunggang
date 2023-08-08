"use client"

import Lottie from "react-lottie-player";
import Data from "public/wel.json"

export default function Anim() {
    return (
        <Lottie 
            animationData={Data}
            playback="30%"
            play
            stop
            style={{width: "100%", height: "100%"}}
        />
    )
}