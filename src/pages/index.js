import Head from "next/head";
import Dashboard from "../components/common/Dashboard";
import Sidebar from "../components/layouts/Sidebar";
import Tables from "../components/Tables";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dashboard Admin</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://rsms.me/inter/inter.css" />
      </Head>
      <Sidebar>
        <Dashboard>
          <Tables />
        </Dashboard>
      </Sidebar>
    </>
  );
}
