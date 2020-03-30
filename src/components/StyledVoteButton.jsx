import styled from 'styled-components';

const StyledVoteButton = styled.button`
  ${props => {
    return props.disabled && 'background-color : grey';
  }}
  background-color: aliceblue;
  border: none;
`;
export default StyledVoteButton;
