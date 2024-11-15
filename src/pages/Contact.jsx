import '../styles/Contact.css';

export default function ContactPage() {
    return (
        <div className="container-contact-page">
            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>Reach out for any inquiries or support.</p>
            </div>
            <div className="contact-content">
                <form className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" placeholder="Enter First Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" placeholder="Enter Last Name" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Enter your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="text" id="phone" placeholder="081232456789" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" placeholder="Enter your Subject" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" placeholder="Enter your Message here..." />
                    </div>
                    <button className="send-message" type="submit">Send Your Message</button>
                </form>
                <div className="contact-info">
                    <div className="info-card">
                        <div className="info-icon">📧</div>
                        <p>support@skillbridge.com</p>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">📞</div>
                        <p>081232456789</p>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">📍</div>
                        <p>Somewhere in the World</p>
                    </div>
                    <div className="info-card">
                        <div className="info-icon">🌐</div>
                        <div className="social-links">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}