import { NavLink } from "react-router-dom";
import { FiAlignJustify, FiX } from "react-icons/fi";
import { useState } from "react";

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="fixed z-20 flex justify-between px-5 w-full py-4 bg-[rgba(0,0,0,0.6)]">
      <h2 className="text-4xl font-semibold text-white">Strong</h2>
      <ul className={`flex items-center gap-6 bg-gray-600 text-white p-10 md:p-0 md:text-white md:bg-transparent ${isOpen ? 'flex-col  md:flex-row absolute md:relative top-20 md:top-0' : 'hidden md:flex'}`}>
                <li><NavLink to='/'>Feed</NavLink></li>
                <li><NavLink to='/hggh'>Shorts</NavLink></li>
                <li><NavLink>Videos</NavLink></li>
                <li><NavLink>Feed</NavLink></li>
            </ul>
      <div className="flex items-center gap-3">
        <button onClick={()=> setIsOpen(!isOpen)} className="md:hidden">{isOpen ? <FiX className="text-3xl text-white" /> : <FiAlignJustify className="text-3xl text-white" />}</button>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Navber;
