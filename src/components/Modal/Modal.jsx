
import React from 'react'
import styled from 'styled-components'
import { createPortal } from "react-dom";


const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const Card = styled.div`
  box-sizing: border-box;
  background-color: #fff;
  padding: 30px;
  min-width: 500px;
  border-radius: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`;

const Modal = ({ onClose, children}) => {
  return (
    <>
    {createPortal(
      <>
    <Backdrop onClick={onClose}/>
    <Card>{children}</Card>
    </>,
    document.getElementById("modal-window")
    )}
    </>
  )
}

export default Modal
