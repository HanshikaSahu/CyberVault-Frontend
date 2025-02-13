import React from "react";
import "./AboutPage.css";

function AboutPage() {
  const cards = [
    {
      image: "cybervault-logo.png",
      title: "CYBERVAULT",
      content:
        " Hello everyone! Welcome to CyberVault, the premier cybersecurity society at KIIT Deemed To Be University. We are a vibrant and dynamic community of innovators, learners, and cybersecurity enthusiasts, dedicated to advancing the field of cybersecurity Our society is committed to fostering an environment of continuous learning and innovation. We offer a diverse range of activities to enhance your skills and understanding of the cybersecurity landscape.",
    },
    {
      image: "kiit.png",
      title: "KIIT",
      content:
        " KIIT Bhubaneswar, officially known as Kalinga Institute of Industrial Technology, is one of India’s premier educational institutions. Established in 1992 by Dr. Achyuta Samanta, KIIT has grown exponentially over the years, becoming a Deemed to be University in 2004. Located in the capital city of Odisha, KIIT is renowned for its world-class infrastructure, diverse academic programs, and a strong emphasis on research and innovation.",
    },
  ];

  return (
    <div className="about-page">
      <header className="header">
        <h1 className="header-title"><span style={{color: "green"}}>ABOUT</span> US</h1>
      </header>

      <section className="founder-section">
        <img
          src="founder.jpg"
          alt="Founder"
          className="founder-image"
        />
        <h2 className="founder-title">Founder</h2>
        <p className="founder-description">
        Dr. Achyuta Samanta is a visionary educationist, philanthropist, and social entrepreneur from India, best known for founding KIIT (Kalinga Institute of Industrial Technology) and KISS (Kalinga Institute of Social Sciences) in Bhubaneswar, Odisha. Born on January 20, 1965, in a small village in Odisha, Dr. Samanta faced numerous hardships during his early life, which fueled his determination to make a significant impact in the field of education and social development.
        </p>
      </section>

      <div className="card-section">
        {cards.map((card, index) => (
          <div key={index} className="info-card">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-content">{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}