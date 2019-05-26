import styled from 'styled-components';
import theme from '../../shared/Theme';
import React from 'react';

export const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  /* background-color: ${ props => props.one ? 'rgba(255,255,255,0)' : 'rgb(239, 239, 239)' }; */
  background: ${props => props.color ? props.color : '#FFFFFF00'} url(${ props => props.backgroundImage});
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: ${props => props.full ? '100vh' : 'auto'};
`; 

export const SectionContainer = styled.div`
  display: block;
  width: 100%;
  line-height: 1.5;
  max-width: ${theme.maxWidth};
  padding: 25px 10px;
  font-family :  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  & p {
    color: black;
    font-size : 16px;
  }

  & h1, h2, h3, h4, h5, h6 {
    color: dodgerblue;
  }

`;

export default (props) => {
  return (
    <SectionWrapper color={props.color} one={props.one} backgroundImage={props.image} full={props.full}>
      <SectionContainer>
        {props.children}
      </SectionContainer>
    </SectionWrapper>
  );
}