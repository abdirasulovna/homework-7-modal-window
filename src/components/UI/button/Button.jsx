import styled from "styled-components"
const StyledButton = styled.button`
 font: inherit;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: 5px solid  #f67722;
    background:  #f67722;
    color: white;
    border-radius: px;
    margin: 0 0.5rem;
`
const Button = (props) => {
  return (
    <StyledButton onClick={props.onClick}>{props.title}</StyledButton>
  )
}

export default Button