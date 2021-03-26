import { AppProps } from "next/dist/next-server/lib/router/router";
import * as React from "react"; 
import CssBaseline from "@material-ui/core/CssBaseline"; 
import { ThemeProvider } from "@material-ui/core";
import theme from '../src/theme';
import StoreProvider from '../src/stores/StoreProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [a,setA] = React.useState();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    };
  }, []);

  return(
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <>{a}</>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StoreProvider>
  ) 

}

export default MyApp;
