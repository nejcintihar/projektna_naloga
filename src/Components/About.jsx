import React from "react";
import "../index.css"
import glow from "../assets/hero-img.png"

export default function About() {
    return (
        <div className="comp-wrapper">
            <div>
            <div className="the-gaming-world-hero">
                <h1 className="hero-the">The</h1>
                <h1 className="hero-gaming">Gaming</h1>
                <h1 className="hero-world">World</h1>
                    </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Laudantium accusamus ipsum veniam hic alias velit deleniti ipsam consequatur molestiae quasi?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id necessitatibus veritatis 
                            aliquid corporis rem odit eius at dolores mollitia expedita maiores
                            explicabo omnis, natus ex hic debitis facilis ea.
                        </p>
                    </div>
            <img src={glow} className="hero-img"></img>
        </div>
    )
}