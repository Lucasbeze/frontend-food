import styled from "styled-components";

export const Container = styled.div`
/*------MENU MOBILE-------*/
 nav {
  width: 100%;
  height: 5em;
  background-color: ${({ theme }) => theme.COLORS.DARK_700};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1em;

  h1 {
    display: flex;
    align-items: center;
    margin-left: 16px;
  }
 }

 .burger-menu {
  height: 100%;
  width: 4em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
 }

 .burger-bar {
  width: 4em;
  height: 0.5em;
  background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  border-radius: 0.5em;
 }

 .menu {
  width: 100%;
  height: 100vh;
  background-color: transparent;
  position: absolute;
  z-index: -1;
 }

 .hidden {
  display: none;
 }

 .visible {
  display:flex ;
  flex-direction: column;
  align-items: flex-start;
  padding:36px 28px ;

  a {
    margin-top: 46px;
    margin-left: 2px;
    font-size:24px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    width: 100%;
    padding-bottom:10px ;
  }
 }

 /*---------menu animation----------*/

 
 .burger-bar.clicked:nth-child(1){
  transform: rotate(45deg) translate(0.75em, 1.25em);
  transition: ease-out 0.5s;
 }
 .burger-bar.clicked:nth-child(2){
  transform: scale(0.1);
  transition: ease-out 0.5s;
 }
 .burger-bar.clicked:nth-child(3){
  transform: rotate(135deg) translate(-0.5em, 1em);
  transition: ease-out 0.5s;
 }
 /*------ unclicked ----------*/
 .burger-bar.unclicked {
  transform: rotate(0) translate(0);
  transition: cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.5s;
 }

.recibo {
  svg {
  width: 38px;
  height: 38px;
  }
  

}

 /*---------FIM DO MENU MOBILE------------*/

 
`;