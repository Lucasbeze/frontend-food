import styled from "styled-components";

export const Container = styled.div`
  width: 210px;
  height: 330px;
  background-color: ${({ theme }) => theme.COLORS.DARK_200};
  border-radius: 8px;
  padding: 24px;
  text-align: end;
  img {
    width: 88px;
    height: 88px;
  }
  svg:nth-child(1) {
    text-align: end;
    width:24px ;
    height: 24px;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.COLORS.LIGHT_300};

    span {
      margin-top: 12px;
    }
  }
  .price {
    margin-top:12px;
    font-size: 16px;
    line-height: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.CAKE_200};
  }
  .buttons {
    margin-top: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    
    span {
      margin-top: 0;
      font-size: 16px;
      font-family: 'Roboto', sans-serif;
      line-height: 16px;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
    button {
      width: 18px;
      height: 25px;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
      svg {
      width: 24px;
      height: 24px;
    }
    }
  }
  .btn {
    margin-top: 16px;
    button{
      width:162px ;
      height: 32px;
      border-radius: 5px;
      padding: 12px 24px;
    }
  }
`;