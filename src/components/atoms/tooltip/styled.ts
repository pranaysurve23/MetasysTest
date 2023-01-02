import styled from 'styled-components';

export const popperMargin = 5;

export const StyledTooltip = styled.div`
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  padding: 15px;
  font-size: 13px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;
