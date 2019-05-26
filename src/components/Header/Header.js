import React from 'react';
import styled from 'styled-components';
import theme from '../../shared/Theme';


const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center; 
  height: ${theme.header.height};

  @media (max-width: 700px) {
    box-sizing: border-box;
    height: auto;
  }
  background: ${props => props.transparent ? 'none' : theme.header.background};
  background-image: url(${ props => props.backgroundImage});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  box-shadow: 0 0 10px #333;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  flex-wrap: wrap;
  
  width: 100%;
  height: 100%;
  max-width: ${theme.maxWidth};
  
  margin: auto;
  font-size: 10px;
`;

export default (props) => {
  return (
    <HeaderWrapper backgroundImage={props.image} transparent={props.transparent}>
      <HeaderContainer>
        {props.children}
      </HeaderContainer>
    </HeaderWrapper>
  );
}


