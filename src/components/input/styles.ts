import styled from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'black' | 'dark';
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  width: 100%;

  label {
    color: ${theme.slate[50]};
    font-size: 0.625rem;
  }

  input {
    color: ${theme.slate[200]};
    border: 0;
    border-radius: 0.25rem;
    padding: 0 0.75rem;
    height: 2.25rem;
    background-color: ${(props) =>
      props.$variant == 'dark' ? theme.zinc[900] : theme.zinc[800]};
    backdrop-filter: blur(10px);
    font-size: 1rem;
    width: 100%;
    border: 1px solid transparent;
    transition: all 150ms;

    &:focus {
      border-color: ${theme.zinc[500]};
    }

    &::placeholder {
      color: ${theme.zinc[400]};
    }
  }
`;
