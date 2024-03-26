import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres }) {
  return (
    <div className={styles.movie}
      // style={{
      //   boxShadow: "2px 5px 10px lightcoral",
      //   display: "flex",
      // }}
    >
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div
        // style={{
        //   display: "flex",
        //   flexDirection: "column",
        //   paddingLeft: "15px",
        // }}
      >
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__year}>{year}</h3>
        <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
        <ul className={styles.movie__genres}>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
// function Movie({ coverImg, title, summary, genres }) {
//   return (
//     <div
//       style={{
//         boxShadow: "2px 5px 10px lightcoral",
//         display: "flex",
//       }}
//     >
//       <img src={coverImg} alt={title} />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           paddingLeft: "15px",
//         }}
//       >
//         <h2>
//           <a href="/movie">{title}</a>
//         </h2>
//         <p>{summary}</p>
//         <ul>
//           {genres.map((genre) => (
//             <li key={genre}>{genre}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
