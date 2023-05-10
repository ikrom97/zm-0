import styled from 'styled-components';

export const Modal = styled.dialog`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100vh;
  padding: 0;
  border: none;
  background-color: rgba(0, 0, 0, 64%);
  padding: 8px;
`;

export const ModalImage = styled.img`
  max-height: calc(100vh - 24px);
  max-width: calc(100vw - 24px);

  @media (min-width: 768px) {
    max-height: calc(100vh - 48px);
    max-width: calc(100vw - 48px);
  }
`;
