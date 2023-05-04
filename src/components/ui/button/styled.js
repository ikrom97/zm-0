import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-width: 40px;
  min-height: 40px;
  text-decoration: none;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  border-radius: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  padding: 4px 16px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  transition: 0.3s;
  cursor: pointer;

  @media (min-width: 1200px) {  
    &:hover {
      background-color: ${({ theme }) => theme.secondary};
    }    
  }
`;
