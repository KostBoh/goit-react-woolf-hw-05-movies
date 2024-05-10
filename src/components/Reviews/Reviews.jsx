import React from 'react';

const Reviews = ({ reviews }) => {
  if (!reviews || !reviews.length) {
    return null;
  }

  return (
    <div>
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h4>{author}</h4>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
