import styled, { css } from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'default' | 'outline';
};

export const Container = styled.button<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.25rem;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.$variant == 'default' ? theme.slate[500] : 'transparent'};
  color: ${(props) =>
    props.$variant == 'default' ? theme.slate[100] : theme.slate[400]};
  border: 0;
  padding: 0 0.75rem;
  transition: all 150ms;

  &:hover {
    background-color: ${theme.slate[600]};
  }
  &:active {
    background-color: ${theme.slate[700]};
  }

  ${(props) =>
    props.$variant == 'outline' &&
    css`
      border: 1px solid ${theme.slate[400]};

      &:hover {
        background-color: transparent;
        border: 1px solid ${theme.slate[500]};
        color: ${theme.slate[500]};
      }
      &:active {
        border: 1px solid ${theme.slate[600]};
        color: ${theme.slate[600]};
      }
    `}
`;
