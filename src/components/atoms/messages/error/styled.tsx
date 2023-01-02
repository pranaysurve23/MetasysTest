import styled from 'styled-components';

export const Container = styled.span<{ position: 'absolute' | 'static' }>`
  position: ${({ position }) => position};
  display: inline-block;
  font-weight: normal;
  font-size: 12px;
  color: #eb3333;
  line-height: 16px;
  min-height: 1em;
`;
