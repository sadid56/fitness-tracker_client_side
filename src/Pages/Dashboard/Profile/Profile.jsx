import SectionHelmet from "../../../Components/SectionHelmet";
import useAuth from "../../../Hooks/useAuth";
import bgImg from "../../../assets/images/slider1.jpg";
const Profile = () => {
  const { user } = useAuth();
  return (
    <div>
      <SectionHelmet title={"Strong | Dashboard-Profile"} />
      <div className="w-[500px] mx-auto mt-5 shadow-lg border   p-3">
        <div className=" relative">
          <img src={bgImg} className="w-full h-[200px]" alt="" />
          <div className="avatar online absolute right-[35%] -bottom-10">
            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
          <h2 className="text-4xl font-bold text-center mt-10">{user?.displayName}</h2>
         <div className="space-y-3 mt-6">
         <p className="text-xl text-gray-500 font-medium">Email: {user?.email}</p>
         </div>
      </div>
    </div>
  );
};

export default Profile;
