
import styles from "./Footer.module.scss"

export default function Footer() {
    return (
        // eslint-disable-next-line react/react-in-jsx-scope
        <footer className={styles.footer}>
            <div className={styles["footer-container"]}>
                <div className={styles["footer-column"]}>
                    <h4>Contact Us</h4>
                    <p>hello@example.com</p>
                    <p>+123 456 789</p>
                    <p>Somewhere in the World</p>
                </div>

                <div className={styles["footer-column"]}>
                    <h4>Home</h4>
                    <a href="#">Benefits</a>
                    <a href="#">Our Courses</a>
                    <a href="#">Our Testimonials</a>
                    <a href="#">Our FAQ</a>
                </div>

                <div className={styles["footer-column"]}>
                    <h4>About Us</h4>
                    <a href="#">Company</a>
                    <a href="#">Achievements</a>
                    <a href="#">Our Goals</a>
                </div>
                <div className={styles["footer-column"]}>
                    <h4>Social Profiles</h4>
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
            <div className={styles["footer-bottom"]}>
                © 2024 Your Company. All rights reserved.
            </div>
        </footer>
    );
}