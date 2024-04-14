import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  background-color: ${theme.zinc[400]};
  border: 0;
  padding: 0;
  transition: all 150ms;

  &:hover {
    background-color: ${theme.zinc[600]};
  }

  &:active {
    background-color: ${theme.zinc[700]};
  }

  svg {
    fill: ${theme.zinc[100]};
    height: 1.25rem;
    width: 3rem;
  }
`;
