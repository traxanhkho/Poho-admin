import "font-awesome/css/font-awesome.min.css";
import UseAdminContext from "../context/AdminContext";
import { HistoryProvider } from "../context/History";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UseAdminContext>
      <HistoryProvider>
        <Component {...pageProps} />
      </HistoryProvider>
    </UseAdminContext>
  );
}

export default MyApp;
