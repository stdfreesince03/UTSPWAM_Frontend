// src/components/Testimonials.jsx
import React from 'react';
import './Testimonials.css';

function Testimonials() {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">Students Testimonials</h2>
      <p className="testimonials-subtitle">
        Hear from our students about their learning experience.
      </p>
      <div className="testimonials-list">
        <div className="testimonial-card">
          <p className="testimonial-text">
            "The web design course provided a solid foundation for me. The instructors were knowledgeable and supportive, and the interactive learning environment was engaging. I highly recommend it!"
          </p>
          <div className="testimonial-footer">
            <img src="/images/user-photo1.png" alt="Sarah L" className="testimonial-user-image" />
            <div className="testimonial-user-info">
              <p className="testimonial-user-name">Sarah L</p>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "I learned so much about UX design. The hands-on projects helped me build a portfolio and apply the skills in real-life projects."
          </p>
          <div className="testimonial-footer">
            <img src="/images/user-photo2.png" alt="David M" className="testimonial-user-image" />
            <div className="testimonial-user-info">
              <p className="testimonial-user-name">David M</p>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>

        <div className="testimonial-card">
          <p className="testimonial-text">
            "The advanced JavaScript course really boosted my confidence and skills. The instructors were clear and made complex topics easy to understand."
          </p>
          <div className="testimonial-footer">
            <img src="/images/user-photo3.png" alt="Emily R" className="testimonial-user-image" />
            <div className="testimonial-user-info">
              <p className="testimonial-user-name">Emily R</p>
            </div>
            <button className="read-more-btn">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;