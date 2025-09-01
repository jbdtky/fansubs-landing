import { Container } from "../shared/Container";
import Marquee from "react-fast-marquee";
import { Title } from "../shared/Title";
import { BtnLink } from "../shared/BtnLink";

export const GetStarted = () => {
  return (
    <section
      className="relative overflow-x-clip scroll-mt-[70px]"
      id="get-started"
    >
      <div className="flex gap-x-[25px] bg-[#26093F] w-[103vw] rotate-[-6deg] mb-[-35px] sm:mb-[-100px]">
        <div className="rfm-child opacity-[10%]">Get Started</div>
        <div className="rfm-child opacity-[10%]">Get Started</div>
        <div className="rfm-child opacity-[10%]">Get Started</div>
      </div>
      <Marquee
        direction="right"
        autoFill={true}
        className="flex gap-x-[25px] bg-[#8120D5] rotate-[4deg]"
      >
        Get started
      </Marquee>
      <Container>
        <div className="flex flex-col items-center lg:mt-[125px] mt-[50px]">
          <Title
            element="h2"
            className="text-[28px] max-w-[85%] lg:max-w-full lg:text-[48px] mb-[15px] text-white impact-text !font-normal"
          >
            New here? Sign up and start earning in minutes{" "}
          </Title>
          <p className="text-white font-light text-center text-[16px] lg:text-[18px] mb-[30px]">
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#AA65E1] to-[#F0C8A4]">
              If you’re already earning through Influencers/NeoReach, you’re in.{" "}
              <br />
            </span>
            Just activate FanSubs in your account and start monetizing your
            biggest supporters. <br /> Your audience wants more. Give them
            FanSubs
          </p>

          <BtnLink
            href="https://app.fansubs.xyz/join-fansubs"
            text="Sign Up to Start Earning"
          />
        </div>
      </Container>
    </section>
  );
};
