import {
  createMuiTheme,
} from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    status: {
      danger: string;
    };

  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}





export const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
  palette:{
      primary: {
        light:"#7986cb",
        main:"#3f51b5",
        dark: "#303f9f"
      }
  }
});

