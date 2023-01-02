import React from 'react';
import { forwardRef, MouseEvent, PropsWithChildren, ReactNode } from 'react';
import { ButtonSizes, ButtonSizesEnum, ButtonStyles, Container } from './styled';

export { ButtonStyles, ButtonSizesEnum, ButtonSizes, Container as ButtonContainer };

export type ButtonProps = {
  text: string | ReactNode;
  inProcessing?: boolean;
  processingText?: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: ButtonStyles;
  size?: ButtonSizesEnum;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  dataTestId?: string;
} & PropsWithChildren;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      text,
      disabled,
      onClick,
      className,
      style = ButtonStyles.Primary,
      size = ButtonSizesEnum.md,
      inProcessing = false,
      processingText = 'Processing...',
      children,
      dataTestId,
      ...rest
    },
    ref,
  ) => {
    return (
      <Container
        className={className}
        onClick={inProcessing ? undefined : onClick}
        inProcessing={inProcessing}
        disabled={disabled}
        btnStyle={style}
        btnSize={size}
        data-testid={dataTestId}
        ref={ref}
        {...rest}
      >
        {inProcessing ? (
          <>
         
            <div>{processingText}</div>
          </>
        ) : (
          <div>{text}</div>
        )}
      </Container>
    );
  },
);
