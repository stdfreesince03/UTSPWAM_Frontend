export default function PricingCards({ data, styles }) {
    return (
        <>
            {/* Header Section */}
            <div className={styles['pricing-header']}>
                <h1>{data.header.title}</h1>
                <p>{data.header.description}</p>
            </div>

            {/* Toggle Buttons */}
            <div className={styles['toggle-buttons']}>
                <button className={`${styles['toggle-btn']} ${styles['active']}`}>Monthly</button>
                <button className={styles['toggle-btn']}>Yearly</button>
            </div>

            {/* PricingPage Cards */}
            <div className={styles['pricing-cards']}>
                {data.plans.map((plan, index) => (
                    <div key={index} className={styles['pricing-card']}>
                        <div className={styles['plan-header']}>{plan.title}</div>
                        <div className={styles['plan-price']}>
                            {plan.price}
                            <span>/{plan.billingCycle}</span>
                        </div>
                        <div className={styles['features']}>
                            {plan.features.map((feature, idx) => (
                                <div key={idx} className={styles['feature']}>
                                    {feature}
                                </div>
                            ))}
                        </div>
                        <button className={styles['get-started']}>Get Started</button>
                    </div>
                ))}
            </div>
        </>
    );
}