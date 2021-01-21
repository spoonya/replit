import { createGlobalStyle } from 'styled-components';
import { Theme } from './theme';

type Props = {
  theme: Theme;
};

export const ThemifiedStyles = createGlobalStyle<Props>`
  .header {
    background-color: ${({ theme }) => theme.colorBeta};
    color: ${({ theme }) => theme.colorAlpha};

    &--project {
      border-bottom: 1px solid ${({ theme }) => theme.colorLine};
  }

    &__logo {
      color: ${({ theme }) => theme.colorAlpha};

    span {
      color: ${({ theme }) => theme.colorPsi};
      }
    }
  }

  .sidebar {
    background-color: ${({ theme }) => theme.colorBeta};

    border-right: 1px solid ${({ theme }) => theme.colorLine};

    &__btn {
      color: ${({ theme }) => theme.colorAlpha};
    }
  }

  .console {
    background-color: ${({ theme }) => theme.colorBeta};

    color: ${({ theme }) => theme.colorAlpha};
  }

  .editor {
    background-color: ${({ theme }) => theme.colorBeta};

    color:  ${({ theme }) => theme.colorAlpha};

    border-right: 1px solid ${({ theme }) => theme.colorLine};
  }

  .explorer {
    background-color: ${({ theme }) => theme.colorGamma};
    border-right: 1px solid ${({ theme }) => theme.colorLine};

    &__header {

      border-bottom: 1px solid ${({ theme }) => theme.colorLine};
    }

    &__btn {
      color: ${({ theme }) => theme.colorAlpha};
    }

    &__title {
      color:  ${({ theme }) => theme.colorAlpha}
    }
  }`;
