import styled from 'styled-components';
const StyledComment = styled.section`
  max-width: 400px;
  border: 2px solid lavender;
  margin: 0 auto;
  background-color: aliceblue;
  @media only screen and (max-width: 768px) {
    max-width: 200px;
    font-size: 12px;
  }
`;

export default StyledComment;
