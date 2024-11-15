
import React from 'react';
import Testimonials from '../components/Testimonials/Testimonials.jsx';
import LoginBox from '../components/LoginBox/LoginBox.jsx';
import '../styles/Login.css';

const testimonialData = [
  {
    text: "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!",
    name: "Sarah L",
    image: "/images/user-photo1.png"
  },
  {
    text: "I learned so much about UX design. The hands-on projects helped me build a portfolio and apply the skills in real-life projects.",
    name: "David M",
    image: "/images/user-photo2.png"
  },
  {
    text: "The advanced JavaScript course really boosted my confidence and skills. The instructors were clear and made complex topics easy to understand.",
    name: "Emily R",
    image: "/images/user-photo3.png"
  }
];

function LoginPage() {
  return (
    <div className="login-page-container">
      <div className="testimonials-section">
        <Testimonials data={testimonialData} />
      </div>
      <div className="login-box-section">
        <LoginBox />
      </div>
    </div>
  );
}

export default LoginPage;