import Head from "next/head";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import Dashboard from "../../components/common/Dashboard";
import Sidebar from "../../components/layouts/Sidebar";
import Tables from "../../components/Tables" ; 
import TableUsers from "../../components/Tables/TableUsers";



export default function Home() {
  const router = useRouter();
  const { currentUser } = useContext(AdminContext);

  useEffect(() => {
    if (!currentUser) {
      router.push({
        pathname: "/login",
      });
    }
  }, []);

  if (currentUser) {
    return (
      <>
        <Head>
          <title>Dashboard Admin</title>
          <link rel="icon" href="/favicon.ico" />
          <link href="https://rsms.me/inter/inter.css" />
        </Head>
        <Sidebar>
          <Dashboard>
            <Tables >
              <TableUsers />
            </Tables>
          </Dashboard>
        </Sidebar>
      </>
    );
  }
}
