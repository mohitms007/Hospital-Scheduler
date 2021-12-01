import "../styles/globals.css";
import 'bulma/css/bulma.min.css';
import type { AppProps } from "next/app";
import { UserProvider } from "@auth0/nextjs-auth0";
import Sidebar from "../components/Sidebar";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <div className="body">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <div className="columns">
          <div className="column is-one-fifth">
            <Sidebar />
          </div>
          <div className="column">
            <Component {...pageProps} />
          </div>

        </div>
      </div>
    </UserProvider>
  );
}

export default MyApp;