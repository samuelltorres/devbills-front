import styled from 'styled-components';

import { theme } from '../../styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: ${theme.slate[50]};
  }

  span {
    font-size: 0.875rem;
    font-weight: 400;
    color: ${theme.slate[200]};
  }
`;
