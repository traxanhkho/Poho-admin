import "font-awesome/css/font-awesome.min.css";
import UseAdminContext from "../context/AdminContext";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <UseAdminContext>
      <Component {...pageProps} />
    </UseAdminContext>
  );
}

export default MyApp;
