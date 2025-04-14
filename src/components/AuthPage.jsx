import { useState } from "react";
import { Container } from "./shared/Container";
import logo from "../assets/logo.svg";
import password from "../assets/password.svg";
import facebookIcon from "../assets/facebook.svg";
import tiktokIcon from "../assets/tiktok.svg";
import instagramIcon from "../assets/instagram.svg";
import linkedinIcon from "../assets/linkedin.svg";


export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleMode = () => setIsLogin(!isLogin);
  const togglePasswordVisibility = () => setShowPassword(prev => !prev);

  const socials = [
    { href: "https://www.facebook.com", icon: facebookIcon },
    { href: "https://tiktok.com", icon: tiktokIcon },
    { href: "https://www.instagram.com", icon: instagramIcon },
    { href: "https://linkedin.com", icon: linkedinIcon }
    ];

  return (
    <section className="flex flex-col items-center justify-center" style={{ backgroundImage: "url('/assets/auth_bg.png')", backgroundSize:"cover" }}>
      <Container>
        <div className="min-h-screen flex items-center justify-center text-white px-4">
          <div className="max-w-[530px] w-full">
           <div className="w-full flex justify-center mb-[70px] relative">
                <a href="/" className="relative flex items-center gap-3">
                    <img src={logo} alt="FanSubs Logo" className="w-[125px] h-[40px] lg:w-50 lg:h-16" />
                </a>
            </div>
            <h2 className="text-center text-[48px] impact-text capitalize font-bold">
              {isLogin ? "Log In" : "Sign Up"}
            </h2>

            <form className="mt-10">
              <div className="flex flex-col mb-[24px]">
                <label htmlFor="email" className="font-bold mb-2">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-5 py-[21px] h-[63px] rounded-[6px]  text-white border border-white focus:outline-none"
                />
              </div>

              {!isLogin && (
                <div className="flex flex-col mb-[24px]">
                  <label htmlFor="name" className="mb-2 font-bold">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full px-5 py-[21px] h-[63px] rounded-[6px] text-white border border-white focus:outline-none"
                  />
                </div>
              )}

              <div className="flex flex-col mb-[28px] relative">
                <label htmlFor="password" className="mb-2 font-bold">
                  Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={
                    isLogin ? "Your password" : "Create your password"
                  }
                  className="w-full px-5 py-[21px] h-[63px] rounded-[6px] text-white border border-white focus:outline-none"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-5 top-[50%] cursor-pointer  text-sm text-[#C397E8] hover:underline"
                >
                  <img src={password} alt="password" />
                </button>
              </div>

              <button
                type="submit"
                className="border-gradient w-full px-4 py-2 rounded-[16px] font-bold cursor-pointer h-[54px] bg-gradient-to-r from-[#8120D5] to-[#C397E8] hover:shadow-[0px_0px_30px_0px_#B57FE459] transition duration-300"
              >
               <span> {isLogin ? "Login" : "Create an account"}</span>
              </button>
            </form>

            <p className="text-center mt-5">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={toggleMode}
                className="text-[#8120D5] cursor-pointer"
              >
                {isLogin ? "Sign Up" : "Login"}
              </button>
            </p>
            <ul className="flex font-light mt-[32px] items-center gap-x-6 flex justify-center">
                {socials.map((item, key) => (
                    <li key={key}>
                        <a
                            href={item.href}
                            className="text-[14px] font-light text-white capitalize hover:opacity-[0.8]"
                        >
                           <img src={item.icon} alt="" />
                        </a>
                    </li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
