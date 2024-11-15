import '../styles/Home.css';
import Carousel from "../components/Carousel/Carousel.jsx";
import Faq from "../components/Faq/Faq.jsx";
import {homeFaq} from "../data/faqData.js";
import homeFaqStyles from "../components/Faq/HomeFaq.module.scss"
import PricingCards from "../components/PricingCards/PricingCards.jsx";

export default function HomePage() {
    return (
        <div className="home-page">
                <section id="slogan-main-nav">
                    <div className="slogan">
                        <div id="sparkle-container">
                            <img src="../../public/logos/slogan-sparkle.png" id="slogan-sparkle" alt="Icon" className="icon" />
                            <div className="main-slogan">
                                <img src="../../public/logos/slogan-lightning.png" alt="LightningImg" className="lightning-icon" />
                                <h1><span className="highlight">Unlock</span> Your Creative Potential</h1>
                            </div>
                        </div>
                        <p className="subtitle">with Online Design and Development Courses.</p>
                        <p className="description">Learn from Industry Experts and Enhance Your Skills.</p>
                    </div>
                    <div className="main-nav-buttons">
                        <a href="#" className="btn explore">Explore Courses</a>
                        <a href="#" className="btn pricing">View Pricing</a>
                    </div>
                </section>

                <Carousel/>

                <img id='stock-home-img' src="../../public/images/stock_home.png" alt="Stock_Home" />

                <div className="home-content-wrapper">
                    <section className="benefits-section">
                        <div className="benefits-header">
                            <h2>Benefits</h2>
                            <p>Whether you’re just starting out or looking to expand your skills, our diverse range of courses is designed to help you grow, one lesson at a time. Discover how we blend flexibility, expert guidance, and hands-on projects to support your learning journey.</p>
                        </div>

                        <div className="benefits-grid">
                            <div className="benefit-card">
                                <div className="benefit-number">01</div>
                                <h3>Flexible Learning Schedule</h3>
                                <p>Fit your coursework around your existing commitments and obligations.</p>
                                <span className="benefit-icon">➔</span>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-number">02</div>
                                <h3>Expert Instruction</h3>
                                <p>Learn from industry experts who have hands-on experience in design and
                                    development.</p>
                                <span className="benefit-icon">➔</span>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-number">03</div>
                                <h3>Diverse Course Offerings</h3>
                                <p>Explore a wide range of design and development courses covering various topics.</p>
                                <span className="benefit-icon">➔</span>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-number">04</div>
                                <h3>Updated Curriculum</h3>
                                <p>Access courses with up-to-date content reflecting the latest trends and industry
                                    practices.</p>
                                <span className="benefit-icon">➔</span>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-number">05</div>
                                <h3>Practical Projects and Assignments</h3>
                                <p>Develop a portfolio showcasing your skills and abilities to potential employers.</p>
                                <span className="benefit-icon">➔</span>
                            </div>

                            <div className="benefit-card">
                                <div className="benefit-number">06</div>
                                <h3>Interactive Learning Environment</h3>
                                <p>Collaborate with fellow learners, exchanging ideas and feedback to enhance your
                                    understanding.</p>
                                <span className="benefit-icon">➔</span>
                            </div>
                        </div>
                    </section>

                    <section id="courses">
                        <div className="courses-header">
                            <h2 className="course-section-title">Our Courses</h2>
                            <p className="courses-description">Whether you’re launching your learning journey or aiming
                                to sharpen your expertise, our courses are crafted to help you evolve, one skill at a
                                time.</p>
                            <button className="view-all-btn">View All</button>
                        </div>

                        <div className="courses-list">

                            <div className="course-card">
                                <img className="course-image" src="../../public/images/web_design.png"
                                     alt="Web Design Fundamentals"/>
                                <div className="course-info">
                                    <div className="course-details">
                                        <span className="course-duration">4 Weeks</span> |
                                        <span className="course-level">Beginner</span> |
                                        <span className="course-instructor">By John Smith</span>
                                    </div>
                                    <div className="course-main">
                                        <h3 className="course-title">Web Design Fundamentals</h3>
                                        <p className="course-description">Learn the fundamentals of web design,
                                            including HTML, CSS, and responsive design principles. Develop skills to
                                            create visually appealing and user-friendly websites.</p>
                                        <a href="#" className="btn get-it-now">Get it Now</a>
                                    </div>

                                </div>
                            </div>


                            <div className="course-card">
                                <img className="course-image" src="../../public/images/ui_ux_design.png"
                                     alt="UI/UX Design"/>
                                <div className="course-info">
                                    <div className="course-details">
                                        <span className="course-duration">6 Weeks</span> |
                                        <span className="course-level">Intermediate</span> |
                                        <span className="course-instructor">By Emily Johnson</span>
                                    </div>
                                    <div className="course-main">
                                        <h3 className="course-title">UI/UX Design</h3>
                                        <p className="course-description">Master the art of intuitive user interfaces
                                            (UI) and enhanced user experiences (UX). Learn design principles,
                                            wireframing, prototyping, and usability testing techniques.</p>
                                        <a href="#" className="btn get-it-now">Get it Now</a>
                                    </div>

                                </div>
                            </div>

                            <div className="course-card">
                                <img className="course-image" src="../../public/images/mobil_app_dev.png"
                                     alt="Mobile App Development"/>
                                <div className="course-info">
                                    <div className="course-details">
                                        <span className="course-duration">8 Weeks</span> |
                                        <span className="course-level">Intermediate</span> |
                                        <span className="course-instructor">By David Brown</span>
                                    </div>
                                    <div className="course-main">
                                        <h3 className="course-title">Mobile App Development</h3>
                                        <p className="course-description">Dive into the world of mobile app development.
                                            Build native iOS and Android applications using Swift, Kotlin, and
                                            industry-leading frameworks.</p>
                                        <a href="#" className="btn get-it-now">Get it Now</a>
                                    </div>
                                </div>
                            </div>

                            <div className="course-card">
                                <img className="course-image" src="../../public/images/graphic_design.png"
                                     alt="Graphic Design for Beginners"/>
                                <div className="course-info">
                                    <div className="course-details">
                                        <span className="course-duration">10 Weeks</span> |
                                        <span className="course-level">Beginner</span> |
                                        <span className="course-instructor">By Sarah Thompson</span>
                                    </div>
                                    <div className="course-main">
                                        <h3 className="course-title">Graphic Design for Beginners</h3>
                                        <p className="course-description">Discover the fundamentals of graphic design,
                                            including typography, color theory, layout design, and image manipulation
                                            techniques for print and digital media.</p>
                                        <a href="#" className="btn get-it-now">Get it Now</a>
                                    </div>


                                </div>
                            </div>


                            <div className="course-card">
                                <img className="course-image" src="../../public/images/front_end_web.png"
                                     alt="Front-End Web Development"/>
                                <div className="course-info">
                                    <div className="course-details">
                                        <span className="course-duration">10 Weeks</span> |
                                        <span className="course-level">Intermediate</span> |
                                        <span className="course-instructor">By Michael Adams</span>
                                    </div>
                                    <div className="course-main">
                                        <h3 className="course-title">Front-End Web Development</h3>
                                        <p className="course-description">Become proficient in front-end web development
                                            with HTML, CSS, JavaScript, and popular frameworks like Bootstrap and React.
                                            Build interactive and responsive websites.</p>
                                        <a href="#" className="btn get-it-now">Get it Now</a>
                                    </div>


                                </div>
                            </div>


                            <div className="course-card">
                                <img className="course-image" src="../../public/images/adv_js.png"
                                     alt="Advanced JavaScript"/>
                                <div className="course-info">
                                    <div className="course-details">
                                        <span className="course-duration">6 Weeks</span> |
                                        <span className="course-level">Advance</span> |
                                        <span className="course-instructor">By Jennifer Wilson</span>
                                    </div>
                                    <div className="course-main">
                                        <h3 className="course-title">Advanced JavaScript</h3>
                                        <p className="course-description">Take your JavaScript skills to the next level.
                                            Explore advanced concepts like closures, asynchronous programming, and ES6
                                            features to build complex applications confidently.</p>
                                        <a href="#" className="btn get-it-now">Get it Now</a>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="pricing-section">
                        <div className="pricing-header">
                            <h2>Our Pricing</h2>
                            <p>Choose the plan that suits your learning journey.</p>
                        </div>

                        <div className="pricing-toggle">
                            <button className="toggle-btn active">Monthly</button>
                            <button className="toggle-btn">Yearly</button>
                        </div>

                        <div className="pricing-cards">
                            <div className="pricing-card">
                                <div className="card-header">Free Plan</div>
                                <div className="card-price">
                                    <span id="price-1">$0</span>/month
                                </div>
                                <ul className="features-list">
                                    <li>✔️ Access to selected free courses.</li>
                                    <li>✔️ Limited course materials.</li>
                                    <li>✔️ Basic support.</li>
                                    <li>❌ No certification.</li>
                                </ul>
                                <button className="btn primary-btn">Get Started</button>
                            </div>
                            <div className="pricing-card">
                                <div className="card-header">Pro Plan</div>
                                <div className="card-price">
                                    <span id="price-2">$79</span>/month
                                </div>
                                <ul className="features-list">
                                    <li>✔️ Unlimited access to all courses.</li>
                                    <li>✔️ Complete course materials.</li>
                                    <li>✔️ Priority support.</li>
                                    <li>✔️ Certification on completion.</li>
                                </ul>
                                <button className="btn primary-btn">Get Started</button>
                            </div>
                        </div>
                    </section>
                    <Faq data={homeFaq} styles={homeFaqStyles}></Faq>
                </div>
        </div>
    );
}