import styled from 'styled-components';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Themes } from '../../../theme';

const variants = {
  [Themes.light]: {
    color: '#AAB0C2',
    active: {
      color: '#EF6134',
    },
    hover: {
      background: 'rgba(255, 255, 255, 0.06)',
    },
  },
};

export const Title = styled.div`
  margin-left: 12px;
  flex: 1 0 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Container = styled(RouterNavLink)`
  transition: ${({ theme }) => theme.transition.base};
  cursor: pointer;
  outline: none;
  position: relative;
  text-decoration: none;

  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2em;
  padding: 12px 16px;

  color: ${({ theme }) => variants[theme.style].color};

  transition: ${({ theme }) => theme.transition.base};

  :hover {
    background: ${({ theme }) => variants[theme.style].hover.background};
  }

  &.active {
    transition-duration: 0s;
    margin-right: 0;
    background: ${({ theme }) => variants[theme.style].hover.background};
    color: ${({ theme }) => variants[theme.style].active.color};
  }
`;
