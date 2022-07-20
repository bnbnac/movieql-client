import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Movies() {
  const client = useApolloClient();
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
            }
          }
        `,
      })
      .then((result) => setMovies(result.data.allMovies));
  }, [client]);
  return (
    <div>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </div>
  );
}
// 1 dependency client
// 2 apolloprovider
