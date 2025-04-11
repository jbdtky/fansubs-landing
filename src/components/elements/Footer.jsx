import { Container } from "../shared/Container"
import  logo  from "../../assets/footer_logo.svg";

export const Footer = () => {
    return (
        <footer className="mt-[90px] mb-[30px]">
            <Container>
                <div className="flex sm:flex-row text-white flex-col justify-between mb-[70px]">
                    <div className="flex flex-col items-center sm:items-left gap-y-2">
                        <p>Powered by</p>
                        <img src={logo} alt="logo" className="h-[82px] sm:h-[42px]" />
                    </div>
                    <div className="flex items-center sm:items-left flex-col gap-y-2">
                        <p className="font-bold text-[24px]">CONTACT US</p>
                        <a href="mailto:help@fansubs.xyz">help@fansubs.xyz</a>
                    </div>
                </div>
                <div className="flex sm:flex-row gap-y-[10px] sm:gap-y-0 items-center text-white flex-col justify-between">
                    <div className="mx-auto font-light  text-[14px] sm:text-base">Copyright @ 2025. FanSubs. All Rights Reserved.</div>
                    <a href="#" className="font-light text-[14px] sm:text-base">Privacy Policy</a>
                </div>
            </Container>
        </footer>
    )
}