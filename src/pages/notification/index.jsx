import Heading from "../../components/common/Heading";
import DatePicker from "../../components/DatePicker";
import Sidebar from "../../components/layouts/Sidebar";
import SortNotification from "../../components/SortNotification";
import StackedLists from "../../components/StackedLists";

function Notification(props) {
  const renderDatepicker = () => <DatePicker right={true} />;

  return (
    <Sidebar>
      <div className="bg-[white] p-4 rounded-2xl shadow-md">
        <Heading right={[renderDatepicker]} title="thông báo" />
        <SortNotification />
        <StackedLists />
      </div>
    </Sidebar>
  );
}

export default Notification;
