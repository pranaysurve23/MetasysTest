import styled from 'styled-components';

export enum CheckboxSizes {
  md = 'md',
  lg = 'lg',
}

const sizes: Record<CheckboxSizes, { height: string; width: string }> = {
  [CheckboxSizes.md]: {
    height: '16px',
    width: '16px',
  },
  [CheckboxSizes.lg]: {
    height: '20px',
    width: '20px',
  },
};
const checkMarkSizes: Record<CheckboxSizes, { height: string; width: string; marginTop: string }> =
  {
    [CheckboxSizes.md]: {
      width: '10px',
      height: '5px',
      marginTop: '4px',
    },
    [CheckboxSizes.lg]: {
      width: '12px',
      height: '7px',
      marginTop: '4px',
    },
  };

export const CheckboxContainer = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  z-index: 9999;
  opacity: 0;
  cursor: pointer;
  width: 16px !important;
  height: 16px !important;
  padding: 0;
  border: 0;
  margin: 0 !important;
  :checked + div {
    background: ${({ theme }) => theme.colors.checkbox.checked.background};
    border: 1px solid ${({ theme }) => theme.colors.checkbox.checked.background};
    :hover {
      background: #ff6e3f;
      border: 1px solid #ff6e3f;
    }
  }
  :disabled + div {
    background: ${({ theme }) => theme.colors.checkbox.disabled.background};
    border: 1px solid ${({ theme }) => theme.colors.checkbox.disabled.background};
    > div {
      border-left: 2px solid ${({ theme }) => theme.colors.checkbox.disabled.markColor};
      border-bottom: 2px solid ${({ theme }) => theme.colors.checkbox.disabled.markColor};
    }
    :hover {
      background: ${({ theme }) => theme.colors.checkbox.disabled.background};
      border: 1px solid ${({ theme }) => theme.colors.checkbox.disabled.background};
    }
  }
`;

export const StyledCheckbox = styled.div<{ checkboxSize: CheckboxSizes }>`
  display: flex;
  justify-content: center;
  height: ${({ checkboxSize }) => sizes[checkboxSize].height};
  width: ${({ checkboxSize }) => sizes[checkboxSize].width};
  border-radius: ${({ theme }) => theme.borderRadius.middle};
  background: ${({ theme }) => theme.colors.checkbox.empty.background};
  border: 1px solid ${({ theme }) => theme.colors.checkbox.empty.borderColor};
  cursor: pointer;
  :hover {
    border: 1px solid ${({ theme }) => theme.colors.checkbox.empty.hoverBorderColor};
  }
`;

export const CheckedIcon = styled.div<{ checkboxSize: CheckboxSizes }>`
  height: ${({ checkboxSize }) => checkMarkSizes[checkboxSize].height};
  width: ${({ checkboxSize }) => checkMarkSizes[checkboxSize].width};
  margin-top: ${({ checkboxSize }) => checkMarkSizes[checkboxSize].marginTop};
  border-left: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  transform: rotate(-50deg);
  position: absolute;
`;
