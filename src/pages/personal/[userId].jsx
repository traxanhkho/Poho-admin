import Sidebar from "../../components/layouts/Sidebar";
import Dashboard from "../../components/common/Dashboard";
import DetailScreen from "../../components/DetailScreen";

function UserInfo(props) {
  return (
    <Sidebar>
      <Dashboard>
        <DetailScreen />
      </Dashboard>
    </Sidebar>
  );
}

export default UserInfo;
