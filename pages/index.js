import Link from "next/link";
import styled from "styled-components";
import useSWR from "swr";

export default function Home() {
  const { data: jokes, isLoading, error } = useSWR("/api/jokes");

  // if (isLoading) return null;
  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <h1>Bad Jokes</h1>
      <ul>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          jokes.map((joke) => (
            <li key={joke.id}>
              <article>
                <Link href={`/jokes/${joke.id}`}>
                  <h2>{jokes.text}</h2>
                </Link>
                <div>
                  <h3>Categories</h3>
                  <UnbulletedList>
                    {joke.categories.map((category) => (
                      <li key={category}>{category}</li>
                    ))}
                  </UnbulletedList>
                  <h2>{jokes.author}</h2>
                </div>
              </article>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

const UnbulletedList = styled.ul`
  padding: 0;
  list-style: none;
`;