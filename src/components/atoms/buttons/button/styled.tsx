
import styled from 'styled-components';
import { FlexCenterCenter } from '../../../common';

export enum ButtonStyles {
  Primary = 'primary',
  Secondary = 'secondary',
  Green = 'green',
}

export enum ButtonSizesEnum {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}
export const ButtonSizes: Record<
  ButtonSizesEnum,
  { height: string; padding: string; fontSize: string }
> = {
  [ButtonSizesEnum.xs]: {
    height: '18px',
    padding: '2px 8px',
    fontSize: '10px',
  },
  [ButtonSizesEnum.sm]: {
    height: '28px',
    padding: '5px 12px',
    fontSize: '12px',
  },
  [ButtonSizesEnum.md]: {
    height: '32px',
    padding: '5px 16px',
    fontSize: '12px',
  },
  [ButtonSizesEnum.lg]: {
    height: '40px',
    padding: '5px 20px',
    fontSize: '14px',
  },
};


export const Container = styled.button<{
  btnStyle: ButtonStyles;
  btnSize: ButtonSizesEnum;
  inProcessing?: boolean;
}>`
  text-transform: capitalize;
  ${FlexCenterCenter};
  position: relative;
  font-size: ${({ btnSize }) => ButtonSizes[btnSize].fontSize};
  padding: ${({ btnSize }) => ButtonSizes[btnSize].padding};
  height: ${({ btnSize }) => ButtonSizes[btnSize].height};
  color: ${({ theme, btnStyle }) => theme.colors.button.default[btnStyle].color};
  background: ${({ theme, btnStyle }) => theme.colors.button.default[btnStyle].background};
  border: 1px solid ${({ theme, btnStyle }) => theme.colors.button.default[btnStyle].borderColor};
  cursor: ${({ inProcessing }) => (inProcessing ? 'default' : 'pointer')};
  border-radius: ${({ theme }) => theme.borderRadius.middle};

  & + & {
    margin-left: 1.5rem;
  }

  :hover {
    background: ${({ theme, btnStyle }) => theme.colors.button.hover[btnStyle].background};
    border: 1px solid ${({ theme, btnStyle }) => theme.colors.button.hover[btnStyle].borderColor};
  }

  :disabled {
    cursor: default;
    pointer-events: none;
    color: ${({ theme, btnStyle }) => theme.colors.button.disabled[btnStyle].color};
    background: ${({ theme, btnStyle }) => theme.colors.button.disabled[btnStyle].background};
    border: 1px solid ${({ theme, btnStyle }) => theme.colors.button.disabled[btnStyle].borderColor};

  }
`;
