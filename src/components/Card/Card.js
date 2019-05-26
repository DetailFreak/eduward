import styled from 'styled-components'

export const Card = styled.div`
  box-sizing: border-box;
  max-width: ${props=> props.width ? props.width : '800px'};
  height: ${props=> props.height ? props.height : 'auto'};
  margin: auto;
  font-family :  -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  padding-top: 25px;
  background: white;
  border: 1px solid #e2e2e2;
  border-radius: 3.5px;
  box-shadow: 0 0 5px #888;
`;

export const CardContent = styled.div`
  display: flex;

  box-sizing: border-box;
  width: 100%;
  padding: 32px;
`;