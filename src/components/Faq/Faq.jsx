import { useRef, useState } from "react";

export default function Faq({ styles, data }) {
    const [visibleAnswers, setVisibleAnswers] = useState(data.map(() => false));

    function toggleFaq(index) {
        setVisibleAnswers((prevVisible) => {
            const newVisible = [...prevVisible];
            newVisible[index] = !newVisible[index];
            return newVisible;
        });
    }

    return (
        <section className={styles.faqSection}>
            <div className={styles.faqHeader}>
                <h2>Frequently Asked Questions</h2>
                <p>Still have questions? Contact our team via support@example.com</p>
                <button className={styles.seeAllButton}>See All FAQ&#39;s</button>
            </div>

            <div className={styles.faqList}>
                {data.map((item, index) => (
                    <div className={styles.faqItem} key={index}>
                        <div className={styles.faqQuestion} onClick={() => toggleFaq(index)}>
                            <span>{item.question}</span>
                            <button className={styles.toggleIcon}>
                                {visibleAnswers[index] ? "−" : "+"}
                            </button>
                        </div>
                        <div
                            className={styles.faqAnswer}
                            style={{ display: visibleAnswers[index] ? "block" : "none" }}
                        >
                            <p>{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
