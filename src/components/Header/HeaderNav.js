import styled from 'styled-components';
import { Link } from 'gatsby';
import theme from '../../shared/Theme';

export default styled.nav`
  box-sizing: border-box;
  margin: auto 0;
  padding: 10px;
  transition: ease all .5s;
  
  & a {
    text-decoration: none;
  }
  
  & a h2 {  
    display: inline;
    box-sizing: border-box;
    margin: 10px;      
    color: ${theme.header.links};
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
  }

  & a h2:hover {
    color: ${theme.header.linksHover};
  }
  @media (max-width: 700px) {
    box-sizing: content-box;
    margin: auto;
  }
`;