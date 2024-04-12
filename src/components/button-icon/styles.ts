import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 0.25rem;
  background-color: ${theme.slate[500]};
  border: 1px ${theme.slate[500]};
  padding: 0;
  transition: all 150ms;

  &:hover {
    background-color: ${theme.slate[600]};
    border: 1px solid ${theme.slate[500]};
  }

  &:active {
    background-color: ${theme.slate[800]};
    border: 1px solid ${theme.slate[700]};
  }

  svg {
    fill: ${theme.slate[100]};
    height: 1.25rem;
    width: 3rem;
  }
`;
