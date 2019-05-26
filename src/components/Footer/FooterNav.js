import styled from 'styled-components';
import theme from '../../shared/Theme'

export default styled.nav`
  display: flex;
  flex-direction: column;
  color: ${theme.footer.text};
  font-size: 14px;
  line-height: 2;
  max-width: 250px;
  padding-right: 100px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  text-rendering: optimizeLegibility;
  line-height: 2;

  & a{
    text-decoration: none;
  }

  & a h2{
    display: flex;
    font-size: 14px;
    line-height: 2;
    margin: 0;
    padding: 0;
    font-weight: normal;
    display: block;
    color: ${theme.footer.links};
    text-decoration: none;
  }

  & a h2:hover {
    color: white;
  }
  @media (max-width: 700px) {
    text-align: right;
    margin-left: auto;
  }
`;