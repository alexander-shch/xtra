import Styled from 'styled-components';

export const InputFlex = Styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  &.half {
    width: 50%;
    margin-left: auto;
  }
  .groupInput {
    flex: 0 50%;
  }

`;
