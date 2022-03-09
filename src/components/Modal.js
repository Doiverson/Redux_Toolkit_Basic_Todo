import ReactDOM from "react-dom";
import styled from "styled-components"

const Modal = ({ children, onClose, open }) =>
    open
        ? ReactDOM.createPortal(
            <StyledModal>
                <button onClick={onClose}>&times;</button>
                { children }
            </StyledModal>,
            document.body
        )
        : null

export default Modal;

const StyledModal = styled.div`
  width: 300px;
  height: 300px;
  background: #80808040;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  
  & > button {
    position: absolute;
    right: 0;
    top: 0;
  }
`;