/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const { user, googleUser, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signIn(formData.email, formData.password);
      const user = userCredential.user;
      console.log(user);
      toast.success("Login successful!", toastOptions);
      navigate("/");
      setFormData({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Login failed. Please check your credentials.", toastOptions);
    }
  };
  console.log(user);
  const handleGoogle = () => {
    googleUser()
      .then(async (result) => {
        const googleUser = result.user;

        const userInfo = {
          name: googleUser.displayName,
          email: googleUser.email,
          password: googleUser.pass,
          role: "user",
        };

        const response = await axios.post(
          "https://e-commerce-server-pink.vercel.appuser",
          userInfo
        );

        const tokenResponse = await axios.post(
          "https://e-commerce-server-pink.vercel.appJWT",
          {
            email: googleUser.email,
          }
        );

        const { token } = tokenResponse.data;
        localStorage.setItem("access-token", token);
        navigate("/");
        toast.success("Google login successful!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Google login failed!");
      });
  };

  const inputStyle =
    "w-full rounded-md border bg-[#c1dcdc] text-gray-400 border-stroke px-5 py-3 focus:border-primary dark:border-dark-3 dark:text-white";

  const toastOptions = {
    duration: 4000,
    position: "top-right",
    style: {
      background: "#41B883",
      color: "#FFFFFF",
    },
  };

  return (
    <section className="py-20 lg:py-[120px]">
      <div className="container mx-auto">
        <Toaster />
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="relative mx-auto max-w-[525px] overflow-hidden rounded-lg shadow-xl px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
              <div className="mb-10 text-center md:mb-16">
                <a href="/#" className="mx-auto inline-block max-w-[160px]"></a>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                </div>
                <div className="mb-10">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-md border border-primary bg-primary px-5 py-3 text-base font-medium transition hover:bg-opacity-90"
                  />
                </div>
              </form>
              <p className="mb-6 text-base text-secondary-color dark:-7">
                Connect With
              </p>
              <ul className="-mx-2 mb-12 flex justify-between">
                <li className="w-full px-2">
                  <div
                    onClick={handleGoogle}
                    className="flex h-11 items-center justify-center rounded-md bg-cyan-800 hover:bg-opacity-90"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8477 8.17132H9.29628V10.643H15.4342C15.1065 14.0743 12.2461 15.5574 9.47506 15.5574C5.95916 15.5574 2.8306 12.8821 2.8306 9.01461C2.8306 5.29251 5.81018 2.47185 9.47506 2.47185C12.2759 2.47185 13.9742 4.24567 13.9742 4.24567L15.7024 2.47185C13.3648 0.429111 10.8444 0 9.47506 0C3.817 0 0 4.48241 0 9.01461C0 13.2972 3.38392 18 9.47506 18C15.4327 18 18 13.5335 18 9.47187C17.9993 8.84887 17.8477 8.17132 17.8477 8.17132Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                </li>
              </ul>
              <a
                href="/signup"
                className="mb-2 inline-block text-base text-secondary-color hover:text-primary hover:underline dark:-7"
              >
                Create new account
              </a>
              <p className="text-base text-secondary-color dark:-7">
                <a href="/forgot" className="text-primary hover:underline">
                  Forgot Password?
                </a>
              </p>
              <div>
                <span className="absolute top-1 right-1">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.39737"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 1.39737 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 13.6943 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 25.9911 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="38.6026"
                      r="1.39737"
                      transform="rotate(-90 38.288 38.6026)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 1.39737 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 13.6943 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 25.9911 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="26.3057"
                      r="1.39737"
                      transform="rotate(-90 38.288 26.3057)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="1.39737"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 1.39737 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="13.6943"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 13.6943 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="25.9911"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 25.9911 14.0086)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="38.288"
                      cy="14.0086"
                      r="1.39737"
                      transform="rotate(-90 38.288 14.0086)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
                <span className="absolute left-1 bottom-1">
                  <svg
                    width="29"
                    height="40"
                    viewBox="0 0 29 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="2.288"
                      cy="25.9912"
                      r="1.39737"
                      transform="rotate(-90 2.288 25.9912)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 14.5849 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="25.9911"
                      r="1.39737"
                      transform="rotate(-90 26.7216 25.9911)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="13.6944"
                      r="1.39737"
                      transform="rotate(-90 2.288 13.6944)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 14.5849 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="13.6943"
                      r="1.39737"
                      transform="rotate(-90 26.7216 13.6943)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="1.39739"
                      r="1.39737"
                      transform="rotate(-90 2.288 1.39739)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="2.288"
                      cy="38.288"
                      r="1.39737"
                      transform="rotate(-90 2.288 38.288)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="38.2879"
                      r="1.39737"
                      transform="rotate(-90 14.5849 38.2879)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="38.2879"
                      r="1.39737"
                      transform="rotate(-90 26.7216 38.2879)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="26.7216"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 26.7216 1.39761)"
                      fill="#3056D3"
                    />
                    <circle
                      cx="14.5849"
                      cy="1.39761"
                      r="1.39737"
                      transform="rotate(-90 14.5849 1.39761)"
                      fill="#3056D3"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
