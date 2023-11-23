import { Link, NavLink } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const handleLogOut = async () => {
    try {
      await logOut();
      toast.success("Log Out Success !");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="fixed z-20 flex justify-between px-5 w-full py-4 bg-[rgba(0,0,0,0.6)]">
      <h2 className="text-4xl font-semibold text-white">Strong</h2>
      <ul
        className={`flex items-center gap-6 bg-gray-600 text-white p-10 md:p-0 md:text-white md:bg-transparent ${
          isOpen
            ? "flex-col  md:flex-row absolute md:relative top-20 md:top-0"
            : "hidden md:flex"
        }`}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/hggh">Gallery</NavLink>
        </li>
        <li>
          <NavLink>Classes</NavLink>
        </li>
        <li>
          <NavLink>Community</NavLink>
        </li>
        <li>
          <NavLink>Dashboard</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-3">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <FiX className="text-3xl text-white" />
          ) : (
            <FiAlignJustify className="text-3xl text-white" />
          )}
        </button>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src={user?.photoURL && user?.photoURL}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li className="text-xl mb-4 font-medium">
                {user?.displayName && user?.displayName}
              </li>
              <li>
                <button
                  onClick={handleLogOut}
                  className="btn bg-[#fe1313] px-6 py-2 rounded-md font-medium text-white p-2 text-xl hover:bg-[#c20505] border-none">
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn bg-[#fe1313] px-6 py-2 rounded-md font-medium text-white p-2 text-xl hover:bg-[#c20505] border-none">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
