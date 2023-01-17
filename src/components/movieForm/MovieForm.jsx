import { useRef } from "react";
import styled from "styled-components";
import Input from "../UI/input/Input";

const MovieForm = (props) => {
  const imageInputRef = useRef();
  const titleInputRef = useRef();
  const ratingInputRef = useRef();
  const saveHandler = (event) => {
    event.preventDefault();
    const newMovie = {
      img: imageInputRef.current.value,
      title: titleInputRef.current.value,
      rating: ratingInputRef.current.value,
    };
    props.addNewMovieHandler(newMovie);
    props.onClose();
  };

  return (
    <form>
      <Input
        id="name"
        labelName="MOVIE:"
        inputType="text"
        placeholder="Movie title"
        ref={titleInputRef}
      />
      <Input
        id="link"
        labelName="IMAGE:"
        inputType="text"
        placeholder="Link"
        ref={imageInputRef}
      />
      <Input
        labelName="REITING:"
        inputType="number"
        id="rating"
        placeholder="Reiting"
        ref={ratingInputRef}
      />
      <div>
        <DeleteButton onClick={props.onClose}>CANCEL</DeleteButton>
        <AddButton onClick={saveHandler}>ADD MOVIE</AddButton>
      </div>
    </form>
  );
};

export default MovieForm;

const DeleteButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  background: red;
`;
const AddButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  color: #fff;
  background: #f67722;
  margin-left: 305px;
  margin-top: 30px;
`;
