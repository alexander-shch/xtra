import Styled from 'styled-components';

export const InputFlex = Styled.div`
  display: flex;
  flex-wrap: wrap;
  &.half {
    width: 50%;
    margin-left: auto;
  }
  .groupInput {
    flex: 0 50%;
  }

`;

export const DateInputs = Styled.div`
 margin: 10px;
  display: flex;
  .date-input{
    margin-left: 10px;
  }
`;

export const Flex = Styled.div`
display:flex;
align-items: flex-end;
flex-wrap:nowrap;
`;
