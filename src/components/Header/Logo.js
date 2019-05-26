import styled from 'styled-components';
import React from 'react';
import HeaderText from './HeaderText';

const LogoWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  height: ${props => props.height ? props.height : '60%'} ;
  margin: auto 0px;
  padding: 5px;
  padding-left: 5px;
  
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
	transition: all 0.3s;
  
  @media (max-width: 700px) {
    box-sizing: border-box;
    flex-direction: column;
    margin: auto auto;
    width: 60%;
    padding: 10px auto;
    padding-top: 5px;


  }
`;

const LogoImage = styled.img`
  box-sizing: border-box;
  margin-left: auto;
  margin: auto;
  max-width:100%;
  max-height:100%;
  padding: 0px 5px;
  
  -webkit-transition: all 0.3s;
	-moz-transition: all 0.3s;
	-ms-transition: all 0.3s;
	-o-transition: all 0.3s;
  transition: all 0.3s;
  
 
`;
 
const LogoTitle = styled.h1`
  box-sizing: border-box;
  font-weight: bold;
  margin: 0;
  padding: 0;

  /* margin-right: auto; */
`;

export default (props) => {
  return (
    <LogoWrapper height={props.height}>
      <LogoImage src={props.src}/>
      <LogoTitle>
        {props.children}
      </LogoTitle>
    </LogoWrapper>
  );
}