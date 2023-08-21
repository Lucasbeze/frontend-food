import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-size: 21px;
  font-weight: bold;
  font-family: 'roboto', sans-serif;
  line-height: 25px;
  color: ${({theme}) => theme.COLORS.LIGHT_100};

  svg {
    color: ${({ theme }) => theme.COLORS.CAKE_200};
    width: 25px;
    height: 25px;
  }
`;