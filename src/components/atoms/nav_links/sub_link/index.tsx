import { Title } from '../styled';
import { SubLinkContainer } from './styled';
import { FC } from 'react';

export type NavSubLinkProps = {
  title?: string;
  icon?: JSX.Element;
  className?: string;
  to: string;
};

export const NavSubLink: FC<NavSubLinkProps> = ({ title, className, to }) => {
  return (
    <SubLinkContainer to={to} activeClassName="active" className={className}>
      <Title>{title}</Title>
    </SubLinkContainer>
  );
};
