import { FC } from 'react';
import { Container } from './styled';

export { Container };

export type LabelProps = {
  className?: string;
  text?: string;
  htmlFor?: string;
};

export const FormLabel: FC<LabelProps> = ({ text, htmlFor, ...rest }) => {
  return (
    <Container htmlFor={htmlFor} {...rest}>
      {text}
    </Container>
  );
};
