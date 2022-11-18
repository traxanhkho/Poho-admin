import { useContext, useEffect } from "react";
import DescriptionList from "../../../components/DescriptionList";
import Sidebar from "../../../components/layouts/Sidebar";
import { AdminContext } from "../../../context/AdminContext";

function CompanyProfile(props) {
  const { setTopbar } = useContext(AdminContext) ; 
  
  useEffect(() =>{
    setTopbar([ 
      { name: "Hồ sơ doanh nghiệp", href: "/business", isChildren: false },
      { name: "Chi tiết doanh nghiệp", href: "#", isChildren: true },
    ]) ;
  },[])

  return (
    <Sidebar>
        <DescriptionList />
    </Sidebar>
  );
}

export default CompanyProfile;
