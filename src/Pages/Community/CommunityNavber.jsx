import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

const CommunityNavber = () => {
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
    <nav className="flex justify-between items-center py-3 sticky top-0 px-5 bg-gray-300 z-50">
      <h3 className="text-3xl font-bold">Strong</h3>

      <div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-[500px] "
        />
      </div>
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
    </nav>
  );
};

export default CommunityNavber;
