import * as Dialog from '@radix-ui/react-dialog';
import { styled } from 'styled-components';

import { theme } from '../../styles/theme';

export const Root = styled(Dialog.Root)``;
export const Portal = styled(Dialog.Portal)``;
export const Trigger = styled(Dialog.Trigger)`
  border: 0;
  background-color: transparent;
`;

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms;

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled(Dialog.Content)`
  width: 100%;
  max-width: 25rem;
  padding: 1rem;
  background-color: ${theme.zinc[900]};
  border-radius: 0.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: contentShow 150ms;

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
