import Logo from "/LOGO.png";
import Profile from "/Profile.png";
import DownArrow from "/DownArrow.png";
import Bell from "/Bell.png";

const NavBar = () => {
  return (
    <div
      className="bg-[#212D57] h-[72px] flex text-white items-center  justify-between px-7  w-[100%] fixed top-0 z-10 "
      style={{
        fontFamily: "Poppins,sans-serif",
        fontStyle: "normal",
      }}
    >
      <div className="flex items-center w-auto ">
        <img src={Logo} alt="LOGO" />
        <h1 className="uppercase font-bold border p-0.5 truncate">
          Bid winner
        </h1>
      </div>
      <div className="w-auto hidden md2:block">
        <ul className="flex gap-4">
          <li>Dashboard</li>
          <li>Jobs</li>
          <li>Calendar</li>
          <li className="truncate">Cost Catalog</li>
          <li>Database</li>
          <li>Tutorials</li>
        </ul>
      </div>
      <div className="w-auto hidden sm:flex items-center gap-6">
        <div className=" flex border  rounded-lg items-center gap-2 text-right px-2 ">
          <div>
            <span className="text-md font-semibold ">Jane Cooper</span>
            <p className="font-light">janecooper@gmail.com</p>
          </div>
          <div>
            <img src={Profile} alt="Profile" />
          </div>
          <div>
            <img src={DownArrow} alt="DownArrow" />
          </div>
          <div></div>
        </div>
        <div className=" relative ">
          <img src={Bell} alt="Notification" />
          <span className=" bg-red-500 text-white text-xs absolute top-0 right-0 rounded-full flex items-center justify-center  w-3.5 h-3.5">
            1
          </span>
        </div>
      </div>
      <div className=" sm:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1={4} y1={6} x2={20} y2={6} />
          <line x1={4} y1={12} x2={20} y2={12} />
          <line x1={4} y1={18} x2={20} y2={18} />
        </svg>
      </div>
    </div>
  );
};

export default NavBar;
