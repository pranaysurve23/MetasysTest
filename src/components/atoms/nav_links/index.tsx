import { CSSProperties, FC, PropsWithChildren } from 'react';
import { Container, Title } from './styled';
import { SubLinksContainer } from './sub_link/styled';
import { NavSubLink } from './sub_link';
import { useRouteMatch } from 'react-router-dom';
import { ArrowIcon } from '../icons';

export { NavSubLink };

export type NavLinkProps = {
  to: string;
  title?: string;
  className?: string;
  style?: CSSProperties;
};

const variants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
};

export const NavLink: FC<PropsWithChildren<NavLinkProps>> = ({
  title,
  className,
  to,
  style,
  children,
}) => {
  const active = Boolean(useRouteMatch(to));

  return (
    <>
      <Container to={to} activeClassName="active" className={className} style={style}>
        <Title>{title}</Title>
        {children && <ArrowIcon direct={active ? 'up' : 'down'} />}
      </Container>

      {children && (
        <SubLinksContainer
          variants={variants}
          initial={'hidden'}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          animate={active ? 'visible' : 'hidden'}
        >
          {children}
        </SubLinksContainer>
      )}
    </>
  );
};
