import { FC, PropsWithChildren } from 'react';
import { Container } from './styled';

export type MessageProps = {
  className?: string;
  text?: string | boolean | JSX.Element;
  position?: 'absolute' | 'static';
} & PropsWithChildren;
export const ErrorMessage: FC<MessageProps> = ({ text, position = 'absolute', ...rest }) => {
  return (
    <Container position={position} {...rest}>
      {text}
    </Container>
  );
};
