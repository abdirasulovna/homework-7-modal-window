import React, { useState } from "react";
import styled from "styled-components";
import MovieForm from "../movieForm/MovieForm";
import Modal from "../Modal/Modal";
import Button from "../UI/button/Button";
const HeaderStyle = styled.header`
  width: 94.7%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5rem;
  background: #083fb7;
`;
const HeaderText = styled.h1`
  margin: 0;
  color: white;
  font-size: 1.5rem;
`;

const Header = ({ addNewMovieHandler }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModalHandler = () => {
    setModalVisible((prevState) => !prevState);
  };
  return (
    <>
      {isModalVisible ? (
        <Modal onClose={toggleModalHandler}>
          <MovieForm
            onClose={toggleModalHandler}
            addNewMovieHandler={addNewMovieHandler}
          />
        </Modal>
      ) : null}
      <HeaderStyle>
        <HeaderText>Favorite Movies</HeaderText>
        <Button title="ADD MOVIE" onClick={toggleModalHandler} />
      </HeaderStyle>
    </>
  );
};
export default Header;
