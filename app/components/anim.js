"use client"

import Lottie from "react-lottie-player";
import Data from "public/anim.json"

export default function Anim() {
    return (
        <Lottie 
            loop
            animationData={Data}
            play
            style={{width: "100%", height: "100%"}}
        />
    )
}