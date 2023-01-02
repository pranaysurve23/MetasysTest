import { ChangeEvent, forwardRef, useState } from 'react';
import {
  CheckboxContainer,
  CheckboxSizes,
  CheckedIcon,
  HiddenCheckbox,
  StyledCheckbox,
} from './styled';

export { CheckboxSizes, CheckboxContainer };

export type CheckboxProps = {
  id?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  size?: CheckboxSizes;
  hasError?: boolean;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  dataTestId?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    { size = CheckboxSizes.md, disabled = false, checked = false, hasError, dataTestId, ...rest },
    ref,
  ) => {
    const [value, setState] = useState({ checked, disabled });
    return (
      <CheckboxContainer>
        <HiddenCheckbox
          data-testid={dataTestId}
          onClick={(e): void =>
            setState({
              checked: (e.target as HTMLInputElement).checked,
              disabled: (e.target as HTMLInputElement).disabled,
            })
          }
          checked={checked}
          disabled={disabled}
          {...rest}
        />
        <StyledCheckbox checkboxSize={size} {...rest}>
          {checked && <CheckedIcon checkboxSize={size} />}
        </StyledCheckbox>
      </CheckboxContainer>
    );
  },
);
