import Dashboard from "../../../components/common/Dashboard";
import DescriptionList from "../../../components/DescriptionList";
import Sidebar from "../../../components/layouts/Sidebar";

function CompanyProfile(props) {
  return (
    <Sidebar>
      <Dashboard>
        <DescriptionList />
      </Dashboard>
    </Sidebar>
  );
}

export default CompanyProfile;
