import styled from 'styled-components'
import {SectionContainer} from '../Section/Section'

export default styled(SectionContainer)`
  display: inline-block;
  max-width: 100%;
  background: rgb(5,1,75);
  text-align: center;
  padding: 70px 10px;
  & h1 {
    color: aqua;
    font-size: 4em;
    @media (max-width:700px) {
      display: none;
    }
  }

  & h2 {
    color: white;
    font-size: 2em;
    font-weight: normal;
    padding-top: 10px;

  }
`;
