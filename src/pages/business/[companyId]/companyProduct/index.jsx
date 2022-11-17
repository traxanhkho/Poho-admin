import Tables from "../../../../components/Tables/index";
import TableCompanyProduct from "../../../../components/Tables/TableCompanyProduct";
import Sidebar from "../../../../components/layouts/Sidebar";
import Dashboard from "../../../../components/common/Dashboard";

function CompanyProduct(props) {
  return (
    <Sidebar>
      <Dashboard>
        <Tables>
          <TableCompanyProduct />
        </Tables>
      </Dashboard>
    </Sidebar>
  );
}

export default CompanyProduct;
