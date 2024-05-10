import React from 'react';

const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null; // або можна повернути <div>No reviews available</div>
  }

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
