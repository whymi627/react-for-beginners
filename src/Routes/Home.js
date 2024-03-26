import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    // #2
    //   const response = await fetch(
    //     "https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year"
    //   );
    //   const json = await response.json();
    //   setMovies(json.data.movies);
    //   setLoading(false);
    // };

    // #3 더 짧게...
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimun_rating=9.0&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  //#1
  // useEffect(() => {
  //   fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimun_rating=8.5&sort_by=year`
  //   )
  //     .then((response) => response.json())
  //     // .then((json) => console.log(json))
  //     .then((json) => {
  //       setMovies(json.data.movies);
  //       setLoading(false);
  //     });
  // }, []);

  console.log(movies);
  return (
    <div className={styles.container}>
      {loading ? (
        <h1 className={styles.loader}>Loading...</h1>
      ) : (
        <div className={styles.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
