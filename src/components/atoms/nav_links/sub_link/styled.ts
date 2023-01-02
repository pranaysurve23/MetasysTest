import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { Themes } from '../../../../theme';

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

export const SubLinksContainer = styled(motion.div)`
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const SubLinkContainer = styled(RouterNavLink)<{ active?: boolean }>`
  display: block;
  cursor: pointer;
  padding: 8px 8px 8px 30px;
  text-decoration: none;
  font-size: 15px;
  outline: none;
  line-height: 1.2em;
  color: ${({ theme }) => variants[theme.style].color};

  :hover {
    background: ${({ theme }) => variants[theme.style].hover.background};
  }

  &.active {
    color: ${({ theme }) => variants[theme.style].active.color};
  }
`;
