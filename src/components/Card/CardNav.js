import styled from 'styled-components'

export default styled.nav`
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e2e2e2;
  padding: 10px;
  & a {
    color: gray;
    font-size: 14px;
    text-decoration: none;
  }
  & a:hover {
    color: gray;
  }
`;