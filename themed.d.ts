// themed.d.ts
import '@rneui/themed';

declare module '@rneui/themed' {
  export interface TextProps {
    title?: boolean;
    label?: boolean;
  }

  export interface ComponentTheme {
    Text: Partial<TextProps>;
  }
}
