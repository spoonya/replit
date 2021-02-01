import { createGlobalStyle } from 'styled-components';
import { Theme } from '../../app/constants/theme.constant';

type Props = {
  theme: Theme;
};

export const ThemifiedStyles = createGlobalStyle<Props>`
  .header {
    background-color: ${({ theme }) => theme.gamma};
    color: ${({ theme }) => theme.alpha};

    &--project {
      border-bottom: 1px solid ${({ theme }) => theme.divider};
  }

    &__logo {
      color: ${({ theme }) => theme.alpha};

    span {
      color: ${({ theme }) => theme.psi};
      }
    }
  }

  .content {
    .ResizePanel-module_ResizeHandleHorizontal__PkS9u {
      border: 2px solid ${({ theme }) => theme.beta};
      background: ${({ theme }) => theme.editorLine};

      span {
        color: ${({ theme }) => theme.alphaDarken};
        text-shadow: 1px 0 1px ${({ theme }) => theme.alpha};
      }
    }
  }

  .pane-output {
    background-color: ${({ theme }) => theme.beta};
  }

  .sidebar {
    background-color: ${({ theme }) => theme.gamma};

    border-right: 1px solid ${({ theme }) => theme.divider};

    &__btn {
      color: ${({ theme }) => theme.alphaDarken};
    }
  }

  .console-wrapper {
    background-color: ${({ theme }) => theme.gamma};

    color: ${({ theme }) => theme.alpha};

    .console {
      span {
        color: ${({ theme }) => theme.psi};
      }

      input {
        color: ${({ theme }) => theme.alphaDarken};
      }

      &__btn {
        color:  ${({ theme }) => theme.alpha};
        background-color: ${({ theme }) => theme.gamma};

        &:hover {
          background-color: ${({ theme }) => theme.alphaDarken};
          color: ${({ theme }) => theme.beta};
        }
      }

      &__header {
        background-color: ${({ theme }) => theme.beta};
      }
    }
  }

  .editor {
    background-color: ${({ theme }) => theme.beta};

    color:  ${({ theme }) => theme.alpha};

    &__title {
      color:  ${({ theme }) => theme.alpha};
    }

  }

  .explorer, .settings {
    background-color: ${({ theme }) => theme.gamma};

    border-right: 1px solid ${({ theme }) => theme.divider};

    &__header {
      border-bottom: 1px solid ${({ theme }) => theme.divider};
    }

    &__btn {
      color: ${({ theme }) => theme.alphaDarken};
    }

    &__title {
      color:  ${({ theme }) => theme.alpha};
    }
  }

  .settings {
    &__item-title {
      color:  ${({ theme }) => theme.alpha};
    }

    &__subitem {
      color:  ${({ theme }) => theme.alphaDarken};
    }

    button {
      color: ${({ theme }) => theme.alpha};
    }

    .MuiInputBase-root {
      color: ${({ theme }) => theme.alphaDarken};
    }

    .MuiFormLabel-root {
      color: ${({ theme }) => theme.alpha};
    }

    .MuiInput-underline:before {
      border-bottom: 1px solid ${({ theme }) => theme.alphaDarken};
    }

    .MuiSelect-icon {
      color: ${({ theme }) => theme.alphaDarken};
    }

    .MuiInputBase-root:hover {
      .MuiInput-underline:before {
        border-bottom: 1px solid ${({ theme }) => theme.alpha};
      }
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
      border-bottom: 1px solid ${({ theme }) => theme.alpha};
    }

    .MuiList-root{
      background-color: ${({ theme }) => theme.gamma};
    }
  }

  .Resizer {
    background-color: ${({ theme }) => theme.divider};
  }

`;
