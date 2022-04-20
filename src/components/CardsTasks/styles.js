import styled from "styled-components";
import { colors } from "../../assets/styles/variables";

export const ContainerCardsTasks = styled.div`
  background-color: ${colors.white};
  color: ${colors.dark};

  padding: 0.62rem;
  border-radius: 0.52rem;
  font-size: 0.75rem;

  width: 23.12rem;
  height: 7.43rem;

  h4 {
    font-weight: bold;
    margim-bottom: 0.62rem;
  }

  p {
    line-height: 0.87rem;
    padding: 0.62rem 0;
    text-align: justify;
  }
`;

export const FooterCards = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div{
      display: flex;
      align-itemsL center
  }

  time{
      font-weight: bold;
  }
`;

export const ContainerAvatar = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-colour: ${colors.dark};
  color: ${colors.white};
  border-radius: 50px;
  margim-right: 1.2rem:
`;
