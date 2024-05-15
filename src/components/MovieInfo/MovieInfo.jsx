import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './MovieInfo.module.css';

const MovieInfo = ({
  id,
  title,
  posterPath,
  overview,
  voteAverage,
  onFetchDetails,
  genres,
}) => {
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const location = useRef(null);

  return (
    <div className={styles.container}>
      <img
        className={styles.poster}
        src={`${baseURL}${posterPath}`}
        alt={title}
      />
      <div className={styles.info}>
        <h2 className={styles.title}>{title}</h2>
        <h4 className={styles.overview}>Overview</h4>
        <p className={styles.overview}>{overview}</p>
        <h4 className={styles.userScore}>User score:</h4>
        <p className={styles.userScore}>{voteAverage}</p>
        <h4 className={styles.genres}>Genres:</h4>
        <p className={styles.genres}>{genres}</p>
        <hr />
        <div className={styles.additionalInfo}>
          <h4>Additional information</h4>
          <ul>
            <li>
              <Link
                to={`/movies/${id}/cast`}
                onClick={() => {
                  onFetchDetails('Cast');
                  location.current = window.location.pathname;
                }}
              >
                Casts
              </Link>
            </li>
            <li>
              <Link
                to={`/movies/${id}/reviews`}
                onClick={() => {
                  onFetchDetails('Reviews');
                  location.current = window.location.pathname;
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;

// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import styles from './MovieInfo.module.css';

// const MovieInfo = ({
//   id,
//   title,
//   posterPath,
//   overview,
//   voteAverage,
//   onFetchDetails,
//   genres,
// }) => {
//   const baseURL = 'https://image.tmdb.org/t/p/w300';
//   const location = useLocation();

//   return (
//     <div className={styles.container}>
//       <img
//         className={styles.poster}
//         src={`${baseURL}${posterPath}`}
//         alt={title}
//       />
//       <div className={styles.info}>
//         <h2 className={styles.title}>{title}</h2>
//         <h4 className={styles.overview}>Overview</h4>
//         <p className={styles.overview}>{overview}</p>
//         <h4 className={styles.userScore}>User score:</h4>
//         <p className={styles.userScore}>{voteAverage}</p>
//         <h4 className={styles.genres}>Genres:</h4>
//         <p className={styles.genres}>{genres}</p>
//         <hr />
//         <div className={styles.additionalInfo}>
//           <h4>Additional information</h4>
//           <ul>
//             <li>
//               <Link
//                 to={`/movies/${id}/cast`}
//                 state={{ from: location.pathname }}
//                 onClick={() => onFetchDetails('Cast')}
//               >
//                 Casts
//               </Link>
//             </li>
//             <li>
//               <Link
//                 to={`/movies/${id}/reviews`}
//                 state={{ from: location.pathname }}
//                 onClick={() => onFetchDetails('Reviews')}
//               >
//                 Reviews
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieInfo;
