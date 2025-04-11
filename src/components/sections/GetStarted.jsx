import { Container } from "../shared/Container";
import Marquee from "react-fast-marquee";
import { Title } from "../shared/Title";
import { BtnLink } from "../shared/BtnLink"


export const GetStarted = () => {
    return (
        <section className="relative overflow-x-clip scroll-mt-[70px]" id="get-started" >
            <div className="flex gap-x-[25px] bg-[#26093F] w-[103vw] rotate-[-6deg] mb-[-35px] sm:mb-[-100px]">
                <div className="rfm-child opacity-[10%]">Get Started</div>
                <div className="rfm-child opacity-[10%]">Get Started</div>
                <div className="rfm-child opacity-[10%]">Get Started</div>
            </div>
            <Marquee autoFill={true} className="flex gap-x-[25px] bg-[#8120D5] rotate-[4deg]">
                Get started
            </Marquee>
            <Container>
                <div className="flex flex-col items-center mt-15 sm:mt-[100px]">
                    <Title element="h2" className="text-[28px] lg:text-[48px] mb-[25px] text-white impact-text font-bold">New here? Sign up and start earning in minutes </Title>
                    <p className="text-white font-light text-center text-[16px] lg:text-[18px] mb-[40px]">
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#AA65E1] to-[#F0C8A4]">If you’re already earning through Influencers/NeoReach, you’re in. <br /></span>
                        Just activate FanSubs in your account and start monetizing your biggest supporters. <br /> Your audience wants more. Give them FanSubs</p>

                         <BtnLink href="/get-started" text="Sign Up for Early Access" />
                </div>
            </Container>
        </section>
    )
}