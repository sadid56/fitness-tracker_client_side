/* eslint-disable react/no-unescaped-entities */
import { Link, useNavigate } from "react-router-dom";
import SectionHelmet from "../Components/SectionHelmet";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn, googleLogin } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);
    try {
      await signIn(data?.email, data?.password);
      toast.success("Login Success !");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  // google login
  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      toast.success("Google Login Success !");
      navigate("/");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <SectionHelmet title={"Strong | Login"} />
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                required
                placeholder="Enter Your Email"
                className="input input-bordered input-error w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                required
                placeholder="Password"
                className="input input-bordered input-error w-full max-w-xs"
              />
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn bg-[#fe1313] px-6 py-2 rounded-md font-medium text-white p-2 text-xl hover:bg-[#c20505] border-none">
                Login
              </button>
            </div>
            <p className="text-center">
              Don't have any account ?{" "}
              <Link className="text-[#fe1313] font-medium" to="/registration">
                Registration
              </Link>
            </p>
          </form>
          <div className="px-7 p-5">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-outline w-full text-xl border-[#fe1313]">
              <FaGoogle /> Continue With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
