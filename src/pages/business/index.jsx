import Dashboard from "../../components/common/Dashboard";
import Sidebar from "../../components/layouts/Sidebar";
import Tables from "../../components/Tables";
import TableCompany from "../../components/Tables/TableCompany";

function CompanyProfile(props) {
  return (
    <Sidebar>
      <Dashboard>
        <Tables>
          <TableCompany />
        </Tables>
      </Dashboard>
    </Sidebar>
  );
}

export default CompanyProfile;
