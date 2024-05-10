import React from 'react';
import styles from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <div className={styles.reviews}>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id} className={styles.reviewItem}>
            <h4 className={styles.author}>{author}</h4>
            <p className={styles.content}>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
