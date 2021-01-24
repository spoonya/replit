export interface Theme {
  readonly alpha: string;
  readonly alphaDarken: string;
  readonly beta: string;
  readonly gamma: string;
  readonly psi: string;
  readonly omega: string;
  readonly divider: string;
  readonly editorLine: string;
  readonly editorLineNum?: string;
}

export const darkTheme: Theme = {
  alpha: '#fff',
  beta: '#282c34',
  gamma: '#21252b',
  psi: '#485fe0',
  omega: '#000',
  divider: '#424242',
  alphaDarken: '#aaa',
  editorLine: '#333842'
};

export const lightTheme: Theme = {
  alpha: '#38434f',
  beta: '#f9f9fa',
  gamma: '#eff0f2',
  psi: '#485fe0',
  omega: '#000',
  divider: '#d2d2d2',
  editorLine: '#ececec',
  alphaDarken: '#656565',
  editorLineNum: '#a7a7a7'
};
