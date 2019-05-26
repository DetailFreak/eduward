import styled from 'styled-components'
import {Link} from 'gatsby'

export default styled.div`

  & a {
    display: flex;
    justify-content: center;
    background: ${props => props.default ? props.default : 'royalblue'};
    box-sizing: border-box;
    padding: 8px 16px;
    color: ${props => props.color ? props.color : 'white'};
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    box-sizing: border-box;
    border-radius: 2.5px;
    width: ${props => props.width ? props.width : 'auto'};
    min-width: 200px;
    /* box-shadow: 1px 1px 2px gray; */
  }

  & a:hover {
    background: ${props => props.hover ? props.hover : 'darkblue'};;
    color: white;
    cursor: pointer;
  }

`;