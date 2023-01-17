import { useState } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

const List = styled.li`
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  display: flex;
  height: 10rem;
`;
const ImageContainer = styled.div`
  flex: 1;
  border-radius: 10px 0 0 10px;
  overflow: hidden;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Container = styled.div`
  flex: 2;
  padding: 1rem;
`;
const TitleText = styled.h2`
  color: #383838;
  margin-bottom: 1rem;
`;
const Text = styled.p`
  color: white;
  display: inline;
  background: #f67722;
  padding: 0.25rem 1rem;
  border: 1px solid #f67722;
  border-radius: 5px;
`;
const DeleteButton = styled.button`
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #821805;
  background: #d10808;
  color: white;
  border-radius: 5px;
  margin: 0 0.5rem;
`;
const BtnNo = styled.button`
  color: blue;
  border-radius: 10px;
  width: 80px;
  height: 40px;
  margin-left: 250px;
  margin-top: 20px;
`;
const BtnYes = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 10px;
  color: white;
  background-color: blue;
  margin-left: 20px;
`;
const H2 = styled.h2`
  font-size: 20px;
  margin-left: 50px;
`;
const MovieItem = (props) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal((prevState) => !prevState);
  };
  const Delete = (event) => {
    event.preventDefault();
    openModal();
    props.handleDeleteClick(props.id);
  };
  return (
    <>
      {modal ? (
        <Modal onClose={openModal}>
          <H2>Are you sure you wanna delete?</H2>
          <BtnNo onClick={openModal}>NO</BtnNo>
          <BtnYes onClick={Delete}>YES</BtnYes>
        </Modal>
      ) : null}
      <List>
        <ImageContainer>
          <Image src={props.src} alt={props.alt} />
        </ImageContainer>
        <Container>
          <TitleText>{props.title}</TitleText>
          <Text>5/{props.rating}stars</Text>
          <DeleteButton onClick={openModal}>DELETE</DeleteButton>
        </Container>
      </List>
    </>
  );
};

export default MovieItem;


