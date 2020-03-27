import styled from 'styled-components';

const StyledUser = styled.aside`
  background-color: aliceblue;
  max-width: 80px;
  max-height: 90px;
  box-shadow: 2px 2px 2px gray;
  @media (max-width: 768px) {
    max-width: 55px;
    max-height: 55px;
    font-size: 12px;
  }
`;

export default StyledUser;
