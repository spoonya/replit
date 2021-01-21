export interface Theme {
  readonly colorAlpha: string;
  readonly colorBeta: string;
  readonly colorGamma: string;
  readonly colorPsi: string;
  readonly colorOmega: string;
  readonly colorLine: string;
  readonly colorEditorLine: string;
  readonly colorEditorLineNum?: string;
}

export const darkTheme: Theme = {
  colorAlpha: '#fff',
  colorBeta: '#282c34',
  colorGamma: '#21252b',
  colorPsi: '#485fe0',
  colorOmega: '#000',
  colorLine: '#424242',
  colorEditorLine: '#333842'
};

export const lightTheme: Theme = {
  colorAlpha: '#38434f',
  colorBeta: '#f9f9fa',
  colorGamma: '#eff0f2',
  colorPsi: '#485fe0',
  colorOmega: '#000',
  colorLine: '#e2e2e2',
  colorEditorLine: '#ececec',
  colorEditorLineNum: '#a7a7a7'
};
