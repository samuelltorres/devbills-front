import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

type CategoryBadgeProps = {
  $color: string;
};

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const Main = styled.main`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 22.5rem;
  width: 100%;
  gap: 0.5rem;
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${theme.zinc[800]};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
  border-radius: 0.25rem;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const ChartContent = styled.div`
  height: 14.5rem;
`;

export const ChartAction = styled.div`
  display: flex;
  align-items: flex-end;
  width: 8rem;
  gap: 0.5rem;
`;

export const Aside = styled.aside`
  min-width: 22.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${theme.zinc[800]};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.35);
  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchTransaction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TransactionGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;

export const CategoryBadge = styled.span<CategoryBadgeProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.625rem;
  font-weight: 400;
  border: 1px solid ${(props) => props.$color};
  border: 1px solid ${theme.zinc[400]};
  color: ${(props) => props.$color};
  color: ${theme.zinc[200]};
  padding: 0.25rem;
  border-radius: 0.125rem;
  cursor: pointer;

  svg {
    fill: ${theme.zinc[50]};
    width: 0.875rem;
    height: 0.875rem;
  }
`;
