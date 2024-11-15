import React from 'react';
import styles from './Carousel.module.css';

const Carousel = () => {
    // CarouselSlide component, renders a single set of images with separators
    const CarouselSlide = () => (
        <div className={styles.carouselSlide}>
            {[...Array(6)].map((_, index) => (
                <React.Fragment key={index}>
                    <img src={`/images/carous-${index + 1}.png`} alt={`Logo ${index + 1}`} />
                    <div className={styles.separator} />
                </React.Fragment>
            ))}
        </div>
    );

    return (
        <div className={styles.carouselContainer}>
            <div className={styles.carousel}>
                <div className={styles.carouselTrack}>
                    <CarouselSlide />
                    <CarouselSlide />
                </div>
            </div>
        </div>
    );
};

export default Carousel;