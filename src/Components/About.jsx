import React from "react";
import "../styles/index.css";
import glow from "../assets/hero-img.png";

export default function About() {
  return (
    <div className="comp-wrapper">
      <div className="s">
        <div className="the-gaming-world-hero">
          <h1 className="hero-the">The</h1>
          <h1 className="hero-gaming">Gaming</h1>
          <h1 className="hero-world">World</h1>
        </div>
        <img src={glow} alt="" className="fuck-css-and-my-life" />
      </div>
      <p>
        Welcome to our humble abode, where you can find the crème de la crème of
        terrible online video games! We pride ourselves on being the ultimate
        purveyor of virtual disappointment, offering a vast selection of games
        that will make you question your life choices.
        <br />
        Our mission is simple: to provide you with games so bad that you'll wish
        you never laid eyes on them. Our games will have you laughing, crying,
        and wondering how on earth they ever got made.
        <br />
        <br />
        You're here for the sheer joy of playing games so terrible that they're
        actually kind of amazing. And we've got plenty of those to go around.
        <br />
        <br />
        Don't blame us when you realize you've wasted hours of your life on a
        game that was barely functional.
        <br />
        At the end of the day, we may not be heroes, but we're certainly
        providing a service that no one asked for. So go ahead, rent that bad
        game and experience the joy of virtual regret. We won't judge.
      </p>
      {/*  <img src={glow} className="hero-img"></img> */}
    </div>
  );
}
