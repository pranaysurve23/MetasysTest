import { css } from 'styled-components';

export const FlexCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexCenterCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlexCenterRight = css`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const FlexCenterLeft = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const InlineFlexCenterCenter = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const OverflowEllipsis = css`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
