import Dashboard from "../components/common/Dashboard";
import DescriptionList from "../components/DescriptionList";
import Sidebar from "../components/layouts/Sidebar";

export default function Business() {
  return (
    <Sidebar>
      <Dashboard>
        <DescriptionList />
      </Dashboard>
    </Sidebar>
  );
}
