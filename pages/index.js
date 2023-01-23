import Seo from "@/components/Seo";
import Head from "next/head";
import { useEffect, useState } from "react";

const API_KEY = "67c083c536b689fc74b429a01c0f65a0";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const {results} = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {movies.map((movie) => (
        <div key={movie.id}>
            <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
