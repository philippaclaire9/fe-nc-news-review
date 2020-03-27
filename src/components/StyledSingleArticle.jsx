import styled from 'styled-components';

const StyledSingleArticle = styled.article`
  padding: 5px 1px;
  background-color: aliceblue;
  max-width: 900px;
  box-shadow: 2px 2px 2px gray;
  margin: 0 auto;
  @media only screen and (max-width: 768px) {
    max-width: 300px;
    font-size: 12px;
  }
`;

export default StyledSingleArticle;
