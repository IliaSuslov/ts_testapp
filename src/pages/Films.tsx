import React, { useEffect } from "react";
import { useStoreon } from "storeon/react";
import styled from "styled-components";
import Film from "../components/Film";

function Films() {
  const { dispatch, films } = useStoreon("films");

  useEffect(() => {
    dispatch("get/film");
  }, [dispatch]);

  return (
    <div>
      <input
        placeholder="Search..."
        value={films.search}
        onChange={(e) => dispatch("film/changed", { search: e.target.value })}
      />
      <Button onClick={() => dispatch("film/search")}>Search</Button>
      {films.Error ? <h3>{films.Error}</h3> : null}
      <Film {...films} />
    </div>
  );
}

export default Films;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #1890ff;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s background;
  &:hover {
    background: #40a9ff;
  }
`;
