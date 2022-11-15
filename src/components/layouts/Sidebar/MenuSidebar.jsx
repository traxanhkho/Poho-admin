
import Nav from "./Nav";


function MenuSidebar() {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-grow flex-col overflow-y-auto bg-[#121212] pt-5">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="/assets/images/Logo.svg"
            alt="logo Công ty Poho"
          />
        </div>
        <div className="mt-5 flex flex-1 flex-col">
          <Nav/>
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
