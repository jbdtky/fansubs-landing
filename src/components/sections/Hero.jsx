import { Container } from "../shared/Container"
import star from "../../assets/star.svg"
import decor_1 from "../../assets/decor_1.svg"
import decor_2 from "../../assets/decor_2.svg"
import { BtnLink } from "../shared/BtnLink"
import {Tag} from "../shared/Tag"

export const Hero = () => {
    return (
        <section className="relative overflow-x-clip pt-[115px] lg:pt-[180px] mb-[35px]">
            <Container>
                <div className="flex flex-col items-center mx-auto max-w-[740px]">
                    <Tag image="💫" text="Join 50K+ influencers today" className={"mb-[20px] sm:mb-[30px]"} />
                    <h1 className="text-[48px] lg:text-[106px] text-white mb-[20px] impact-text text-center uppercase leading-[1.07]">Easy Earnings. Happy Fans.</h1>
                    <p className="font-light text-center text-[16px] sm:text-[18px] text-white mb-10"><span className="block font-semibold text-[#BC7ED1]">FanSubs keeps it simple. One post a week. Low fees. Built for creators.</span>
                        Fan-to-creator monetization platforms make you do all the work. 
                        FanSubs changes that by integrating directly into your existing workflow — so you can focus on what matters: creating
                    </p>
                    <div className="relative w-full md:w-max">
                        <img className="absolute -top-[40px] -left-[20px]  md:-top-[50px] md:-left-[35px]" src={decor_1} alt="decor" />  
                        <img className="absolute -top-[40px] -right-[20px] md:-top-[35px] md:-right-[30px]" src={decor_2} alt="decor" />
                        <BtnLink href="/auth" text="Sign Up for Early Access" />
                    </div>
                </div>
            </Container>
        </section>
    )
}