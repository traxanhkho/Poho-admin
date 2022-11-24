import "font-awesome/css/font-awesome.min.css";
import UseAdminContext from "../context/AdminContext";
import AuthUserProvider  from "../context/AuthContext";
import { HistoryProvider } from "../context/History";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UseAdminContext>
      <AuthUserProvider>
        <HistoryProvider>
          <Component {...pageProps} />
        </HistoryProvider>
      </AuthUserProvider>
    </UseAdminContext>
  );
}

export default MyApp;
