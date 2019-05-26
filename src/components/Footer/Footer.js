import styled from 'styled-components';
import theme from '../../shared/Theme';

export const FooterWrapper = styled.footer`
  display: block;
  width: 100%;
  background-color: ${theme.footer.background};
`;

export const FooterContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  max-width: ${theme.maxWidth};
  padding: 25px 10px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
