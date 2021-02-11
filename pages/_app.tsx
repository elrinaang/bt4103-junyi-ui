import { AppProps } from "next/dist/next-server/lib/router/router";
import * as React from "react"; 

const MyApp = ({ Component, pageProps }: AppProps) => {

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />; 

}

export default MyApp;
