import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-container">
      <h1 className="about-heading">About Us</h1>
      <div className="about-content">
        <div className="about-section">
          <h2>Our Story</h2>
          <p>
          Discover how our journey began, from a spark of an idea to a full-fledged platform dedicated to testing and enhancing reading abilities. Learn about the challenges we've overcome and the milestones that have shaped us.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
          At the core of our website is a mission to elevate reading comprehension. We aim to provide a dynamic space where users can engage with a variety of texts, fostering their reading skills while enjoying the process. Our mission is to make reading an enjoyable and enriching experience for all.
          </p>
        </div>
        <div className="about-section">
          <h2>Our Team</h2>
          <p>
          Meet the passionate individuals who make it all possible. Our diverse team brings together expertise in education, technology, and content creation. With a shared dedication to promoting literacy, we're committed to delivering a top-notch platform that empowers readers of all levels.
          </p>
        </div>
      </div>
      <div className="additional-info">
        <h2>Why Choose Us?</h2>
        <p>
        Choose us to unlock your reading potential with a user-centered platform designed to enhance your comprehension skills through engaging and diverse texts.
        </p>
        <img src="/images/team.jpg" alt="Our Team" className="team-image" />
      </div>
    </div>
  );
}

