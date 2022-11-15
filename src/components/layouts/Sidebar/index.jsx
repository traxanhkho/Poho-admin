import { useContext, useState } from "react";
import { AdminContext } from "../../../context/AdminContext";
import MenuSidebar from "./MenuSidebar";
import MenuDialog from "./MenuDialog";
import TopBar from "./TopBar";

export default function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { navigation, userNavigation } = useContext(AdminContext);


  if (navigation && userNavigation) {
    return (
      <>
        <div className="sidebar-section sm:min-h-screen ">
          <MenuDialog
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          <MenuSidebar />
          <div className="flex flex-1 flex-col md:pl-64">
            <TopBar setSidebarOpen={setSidebarOpen} />
            <main>{children}</main>
          </div>
        </div>
      </>
    );
  }
}
