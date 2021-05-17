import React, { FC, ReactElement } from "react";
import styled from "styled-components";

interface iFilm {
  Title: string;
  Poster: string;
  imdbRating: string;
  imdbVotes: string;
  Actors: string;
  Released: string;
  Runtime: string;
  Rated: string;
}

const Film: FC<iFilm> = (f): ReactElement => {
  return (
    <Wrapper>
      <Img>
        <Title>{f.Title}</Title>
        <img src={f.Poster} alt="poster" />
        <Rating>
          <h3>Imdb: </h3>
          <p>{f.imdbRating}</p>
          <h3>Votes: </h3>
          <p>{f.imdbVotes}</p>
        </Rating>
      </Img>
      <Desc>
        <h3>Actors: </h3>
        <p>{f.Actors}</p>
        <h3>Release Year: </h3>
        <p>{f.Released}</p>
        <h3>Runtime: </h3>
        <p>{f.Runtime}</p>
        <h3>Rated: </h3>
        <p>{f.Rated}</p>
      </Desc>
    </Wrapper>
  );
};

export default Film;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 50px;
  border: 1px solid #1890ff;
`;

const Rating = styled.div`
  display: flex;
  flex-direction: row;
`;

const Img = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  width: 30%;
`;
const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: right;
  width: 70%;
`;

const Title = styled.h1`
  color: #0d1a26;
  font-weight: 400;
`;
