import Seo from "@/components/Seo";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const API_KEY = "67c083c536b689fc74b429a01c0f65a0";

export default function Home({results}) {
    const router = useRouter();
    const onClick = (id) => {
        router.push(`/movies/${id}`);
    };
  return (
    <div className="container">
      <Seo title="Home" />
      {results?.map((movie) => (
        // <Link href={`/movies/${movie.id}`} key={movie.id}>
        <div onClick={() => onClick(movie.id)} className="movie">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
        // </Link>
      ))}
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();
  return {
    props: {
        results,
    },
  };
}
