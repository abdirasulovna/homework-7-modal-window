import styled from "styled-components";
import MovieItem from "../movieitem/MovieItem";
const Ul = styled.ul`
  list-style: none;
  width: 40rem;
  max-width: 90%;
  margin: 1rem auto;
  padding: 0;
`;
const Movie = ({ items, handleDeleteClick }) => {
  return (
    <>
      <Ul>
        {items.map((elem) => {
          return (
            <MovieItem
              id={elem.id}
              handleDeleteClick={handleDeleteClick}
              src={elem.img}
              alt="title"
              key={elem.id + new Date().getMilliseconds()}
              title={elem.title}
              rating={elem.rating}
            />
          );
        })}
      </Ul>
    </>
  );
};

export default Movie;
