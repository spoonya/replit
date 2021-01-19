export interface Theme {
  readonly colorAlpha: string;
  readonly colorBeta: string;
  readonly colorGamma: string;
  readonly colorPsi: string;
  readonly colorOmega: string;
  readonly colorLine: string;
  readonly colorEditorLine: string;
}

export const darkTheme: Theme = {
  colorAlpha: '#fff',
  colorBeta: '#282c34',
  colorGamma: '#21252b',
  colorPsi: '#485fe0',
  colorOmega: '#000',
  colorLine: '#454545',
  colorEditorLine: '#333842'
};

export const lightTheme: Theme = {
  colorAlpha: '#525252',
  colorBeta: '#fff',
  colorGamma: '#f5f5f5',
  colorPsi: '#485fe0',
  colorOmega: '#000',
  colorLine: '#e2e2e2',
  colorEditorLine: '#f8f8f8'
};
