import '../styles/About.css'
export  default function AboutPage() {
    return (
        <div className="container-about-page">
            <div className="about-header">
                <h1>About Skillbridge</h1>
                <p>Welcome to our platform, where we are passionate about empowering individuals to master the world of
                    design and development. We offer a wide range of online courses designed to equip learners with the
                    skills and knowledge needed to succeed in the ever-evolving digital landscape.</p>
            </div>

            <section className="achievements">
                <h2>Achievements</h2>
                <p>Our commitment to excellence has led us to achieve significant milestones along our journey. Here are
                    some of our notable achievements:</p>

                <div className="achievement-cards">
                    <div className="achievement-card">
                        <div className="icon">🏆</div>
                        <h3>Trusted by Thousands</h3>
                        <p>We have successfully served thousands of students, helping them unlock their potential and
                            achieve their career goals.</p>
                    </div>

                    <div className="achievement-card">
                        <div className="icon">🏅</div>
                        <h3>Award-Winning Courses</h3>
                        <p>Our courses have received recognition and accolades in the industry for their quality, depth
                            of content, and effective teaching methodologies.</p>
                    </div>

                    <div className="achievement-card">
                        <div className="icon">📈</div>
                        <h3>Positive Student Feedback</h3>
                        <p>We take pride in the positive feedback we receive from our students, who appreciate the
                            practicality and relevance of our course materials.</p>
                    </div>

                    <div className="achievement-card">
                        <div className="icon">🤝</div>
                        <h3>Industry Partnerships</h3>
                        <p>We have established strong partnerships with industry leaders, enabling us to provide our
                            students with access to the latest tools and technologies.</p>
                    </div>
                </div>
            </section>
            <section className="goals">
                <h2>Our Goals</h2>
                <p>At Skillbridge, our goal is to empower individuals from all backgrounds to thrive in the world of
                    design and development. We believe that education should be accessible and transformative, enabling
                    learners to pursue their passions and make a meaningful impact.</p>
                <div className="goals-cards">
                    <div className="goal-card">
                        <h3>Provide Practical Skills</h3>
                        <p>We focus on delivering practical skills that are relevant to the current industry demands.
                            Our courses are designed to equip learners with the knowledge and tools needed to excel in
                            their chosen field.</p>
                    </div>
                    <div className="goal-card">
                        <h3>Foster Creative Problem-Solving</h3>
                        <p>We encourage creative thinking and problem-solving abilities, allowing our students to tackle
                            real-world challenges with confidence and innovation.</p>
                    </div>
                    <div className="goal-card">
                        <h3>Promote Collaboration and Community</h3>
                        <p>We believe in the power of collaboration and peer learning. Our platform fosters a supportive
                            and inclusive community where learners can connect, share insights, and grow together.</p>
                    </div>
                    <div className="goal-card">
                        <h3>Stay Ahead of the Curve</h3>
                        <p>The digital landscape is constantly evolving, and we strive to stay at the forefront of
                            industry trends. We regularly update our course content to ensure our students receive the
                            latest knowledge and skills.</p>
                    </div>
                </div>
                <div className="call-to-action">
                    <h2>Together, let&#39;s shape the future of digital innovation</h2>
                    <button className="join-now">Join Now</button>
                </div>
            </section>
        </div>
    );
}