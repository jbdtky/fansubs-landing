import { Container } from "../shared/Container";
import { Link } from "react-router-dom";
import  logo  from "../../assets/footer_logo.svg";

export const Footer = () => {
    return (
        <footer className="mt-[85px] lg:mt-[90px] mb-[30px] overflow-x-clip">
            <Container>
                <div className="flex sm:flex-row text-white flex-col justify-between mb-[40px] lg:mb-[80px] items-center gap-y-[45px] lg:gap-y-0">
                    <div className="flex flex-col text-[14px] lg:text-[16px] items-center lg:items-start gap-[20px] lg:gap-y-2">
                        <p>Powered by</p>
                        <a href="https://influencers.com/" target="_blank">
                            <img src={logo} alt="logo" className="lg:h-[50px] sm:h-[42px]" />
                        </a>
                    </div>
                    <div className="flex items-center sm:items-start flex-col gap-[10px] lg:gap-y-2">
                        <p className="font-bold text-[24px]">CONTACT US</p>
                        <a className="text-[14px] lg:text-[16px] hover:text-[#8120D5] transition-colors duration-300" href="mailto:help@fansubs.xyz">help@fansubs.xyz</a>
                    </div>
                </div>
                <div className="relative flex sm:flex-row gap-y-[10px] sm:gap-y-0 pt-[20px] lg:pt-0 items-center text-white flex-col justify-between  before:content-[''] before:absolute before:top-0 before:left-[-20px] before:opacity-30 before:w-screen before:h-px before:bg-white sm:before:content-none">
                    <div className="mx-auto font-light  text-[14px] sm:text-base">Copyright @ 2025. FanSubs. All Rights Reserved.</div>
                    <Link to={"/privacy-policy"} className="font-light text-[14px] sm:text-base lg:absolute right-0 top-0 hover:text-[#8120D5] transition-colors duration-300">Privacy Policy</Link>
                </div>
            </Container>
        </footer>
    )
}