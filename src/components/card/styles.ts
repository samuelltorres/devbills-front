import styled from 'styled-components';

import { theme } from '../../styles/theme';

type ContainerProps = {
  $variant: 'balance' | 'incomes' | 'expenses';
};

const variantColorMap = {
  balance: theme.colors.info,
  incomes: theme.colors.success,
  expenses: theme.colors.error,
};

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  background-color: ${theme.zinc[800]};
  border-radius: 0.25rem;
  border: 1px solid ${theme.zinc[700]};
  width: 100%;

  svg {
    width: 2rem;
    height: 2rem;
    fill: ${(props) => variantColorMap[props.$variant]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
      font-size: 1rem;
      font-weight: 300;
      color: ${theme.slate[200]};
    }

    strong {
      font-size: 1.5rem;
      font-weight: 500;
      color: ${(props) => variantColorMap[props.$variant]};
    }
  }
`;
