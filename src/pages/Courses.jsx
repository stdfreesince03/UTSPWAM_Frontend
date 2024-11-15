
import '../styles/Courses.css';


export default function CoursesPage() {
    return (
        <div className="container-courses-list">

            <div className="course-header">
                <h1>Online Courses on Design and Development</h1>
                <p>Welcome to our online courses page, where you can enhance your skills in design and development. Choose from our carefully curated selection of 10 courses designed to provide you with comprehensive knowledge and practical experience.</p>
            </div>


            <div className="course-card">
                <button className="view-course">View Course</button>
                <h2>Web Design Fundamentals</h2>
                <p>Learn the fundamentals of web design, including HTML, CSS, and responsive design principles. Develop the skills to create visually appealing and user-friendly websites.</p>
                <div className="course-images">
                    <img src="/images/CourseWeb_1.png" alt="Web Design Image 1"/>
                    <img src="/images/CourseWeb_2.png" alt="Web Design Image 2"/>
                    <img src="/images/CourseWeb_3.png" alt="Web Design Image 3"/>
                </div>
                <div className="course-details">
                    <span>4 Weeks</span>
                    <span>Beginner</span>
                </div>
                <div className="curriculum">
                    <div className="curriculum-item">
                        <h3>01</h3>
                        <p>Introduction to HTML</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>02</h3>
                        <p>Styling with CSS</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>03</h3>
                        <p>Introduction to Responsive Design</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>04</h3>
                        <p>Design Principles for Web</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>05</h3>
                        <p>Building a Basic Website</p>
                    </div>
                </div>
            </div>


            <div className="course-card">
                <button className="view-course">View Course</button>
                <h2>UI/UX Design</h2>
                <p>Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). Learn design principles, wireframing, prototyping, and usability testing techniques.</p>
                <div className="course-images">
                    <img src="/images/CourseUI_1.png" alt="UI Design Image 1"/>
                    <img src="/images/CourseUI_2.png" alt="UI Design Image 2"/>
                    <img src="/images/CourseUI_3.png" alt="UI Design Image 3"/>
                </div>
                <div className="course-details">
                    <span>6 Weeks</span>
                    <span>Intermediate</span>
                </div>
                <div className="curriculum">
                    <div className="curriculum-item">
                        <h3>01</h3>
                        <p>Introduction to UI/UX Design</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>02</h3>
                        <p>User Research and Personas</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>03</h3>
                        <p>Wireframing and Prototyping</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>04</h3>
                        <p>Visual Design and Branding</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>05</h3>
                        <p>Usability Testing and Iteration</p>
                    </div>
                </div>
            </div>


            <div className="course-card">
                <button className="view-course">View Course</button>
                <h2>Mobile App Development</h2>
                <p>Dive into the world of mobile app development. Learn to build native iOS and Android applications using industry-leading frameworks like Swift and Kotlin.</p>
                <div className="course-images">
                    <img src="/images/CourseMobile_1.png" alt="App Dev Image 1"/>
                        <img src="/images/CourseMobile_2.png" alt="App Dev Image 2"/>
                            <img src="/images/CourseMobile_3.png" alt="App Dev Image 3"/>
                </div>
                <div className="course-details">
                    <span>8 Weeks</span>
                    <span>Intermediate</span>
                </div>
                <div className="curriculum">
                    <div className="curriculum-item">
                        <h3>01</h3>
                        <p>Introduction to Mobile App Development</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>02</h3>
                        <p>Fundamentals of Swift Programming</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>03</h3>
                        <p>Fundamentals of Kotlin Programming</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>04</h3>
                        <p>Building User Interfaces</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>05</h3>
                        <p>App Deployment and Testing</p>
                    </div>
                </div>
            </div>


            <div className="course-card">
                <button className="view-course">View Course</button>
                <h2>Graphic Design for Beginners</h2>
                <p>Explore the basics of graphic design, including typography, color theory, layout design, and image manipulation techniques.</p>
                <div className="course-images">
                    <img src="/images/CourseGraphic_1.png" alt="Graphic Design Image 1"/>
                        <img src="/images/CourseGraphic_2.png" alt="Graphic Design Image 2"/>
                            <img src="/images/CourseGraphic_3.png" alt="Graphic Design Image 3"/>
                </div>
                <div className="course-details">
                    <span>10 Weeks</span>
                    <span>Beginner</span>
                </div>
                <div className="curriculum">
                    <div className="curriculum-item">
                        <h3>01</h3>
                        <p>Introduction to Graphic Design</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>02</h3>
                        <p>Typography and Color Theory</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>03</h3>
                        <p>Image Editing and Manipulation</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>04</h3>
                        <p>Logo and Brand Design</p>
                    </div>
                    <div className="curriculum-item">
                        <h3>05</h3>
                        <p>Building Design Portfolios</p>
                    </div>
                </div>
            </div>
        </div>
    );
}