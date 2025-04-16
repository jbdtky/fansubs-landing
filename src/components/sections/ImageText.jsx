import { Container } from "../shared/Container"
import { Title } from "../shared/Title"
import {Tag} from "../shared/Tag"
import check from "../../assets/check.svg"
import arrowRight from "../../assets/arrow_right.svg"
import arrowLeft from "../../assets/arrow_left.svg"
import { motion } from "framer-motion"
import underline from "../../assets/underline.svg"

export const ImageText = () => {
    const variants = {
        leftToRight: {
          hidden: { opacity: 0, x: '-100%' },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
        },
        rightToLeft: {
          hidden: { opacity: 0, x: '100%' },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
        }
      }

    return (
        <section className="overflow-x-clip scroll-mt-[70px] mb-[85px]" id="why-fansubs">
            <Container>
                <div className="flex flex-col items-center mb-[30px] lg:mb-20">
                    <Tag image="💸" text="Why FanSubs?" className="mb-[10px]" />
                    <Title element="h2" className="text-[28px] lg:text-[48px] !font-normal impact-text text-white">Keep More of What You Earn with <span className="relative">
                        FanSubs
                        <img className="absolute left-0 top-full w-full" src={underline} alt="underline" />

                        </span>
                        </Title>
                </div>
                <div className="flex gap-y-[20px] lg:gap-y-10 flex-col lg:flex-row justify-between items-start mb-10 lg:mb-25">
                    <motion.div className="relative w-full lg:w-[43.8%]" variants={variants.leftToRight} initial="hidden" whileInView="visible" viewport={{ once: true}}>
                        <div className="left-to-right ">
                            <Title
                            element="h3"  
                            className="text-[20px] lg:text-[36px] mb-[10px] lg:mb-0 text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#AA65E1] to-[#F0C8A4]">Integrated Monetization</Title>
                            <p className="text-white font-light text-sm lg:text-base mb-5 lg:mb-[15px]">No standalone struggle – Fan monetization works best when it’s part of your existing income streams.</p>
                            <ul className="flex flex-col gap-[5px] lg:gap-y-[14px] text-white">
                                <li className="flex gap-x-2 text-regular lg:text-[18px]"><img src={check} alt="check" /> <p>Seamless integration with your favorite creator tools</p></li>
                                <li className="flex gap-x-2 text-regular lg:text-[18px]"><img src={check} alt="check" /> <p>Get paid via Stripe & cash out whenever you want</p></li>
                            </ul>
                            <img className="absolute bottom-0 lg:bottom-[20px] w-[45px] lg:w-[90px] rotate-[45deg] lg:rotate-0 right-0 lg:right-[-90px]" src={arrowRight} alt="arrow" />
                        </div>
                    </motion.div>
                    <motion.div className="relative flex-col lg:flex-row lg:w-[43.5%]" variants={variants.rightToLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className=" right-to-left ">
                            <div className="absolute -bottom-[20px] left-[50%] max-w-[190px] translate-x-[-50%] lg:translate-x-0 lg:bottom-[50px] lg:-left-[70px] h-[37px] sm:h-[45px]">
                                <img className="hidden lg:block absolute -top-[50px] -left-[30px]" src="/assets/omg.png" alt="image" />
                                <img className="w-full h-full object-contain" src="/assets/quick.png" alt="image" />
                            </div>
                            <img src="/assets/image-text_1.png" alt="image" />
                        </div>
                    </motion.div>
                </div>
                <div className="flex flex-col-reverse  gap-y-10 lg:flex-row items-start justify-between">
                    <motion.div className="relative flex-col lg:flex-row w-full lg:w-[43.5%]" variants={variants.leftToRight} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="left-to-right">
                            <div className="absolute -bottom-[20px] w-auto max-w-[190px] left-[50%] lg:left-[unset] translate-x-[-50%] lg:translate-x-0  lg:bottom-[50px] lg:-right-[50px]  h-[37px] sm:h-[45px]">
                                <img className="w-full h-full object-contain" src="/assets/fanmail.png" alt="image" />
                            </div>
                            <img src="/assets/image-text_2.png" alt="image" />
                        </div>
                    </motion.div>
                    <motion.div className="relative lg:w-[43.8%]" variants={variants.rightToLeft} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <div className="right-to-left ">
                            <img className=" hidden lg:block absolute lg:top-[150px] lg:left-[-120px]" src={arrowLeft} alt="arrow" />
                            <Title
                                element="h3"  
                                className="text-[20px] lg:text-[36px] font-bold text-left text-transparent bg-clip-text bg-gradient-to-r from-[#AA65E1] to-[#F0C8A4]">Weekly = Peak Engagement</Title>
                            <p className="text-white text-light text-sm lg:text-base mb-[15px]">Consistency is key to keeping your audience engaged. When fans know something exciting is coming each week, it builds anticipation and maintains interest</p>
                            <ul className="flex flex-col gap-[5px] lg:gap-y-[14px] text-white">
                                <li className="flex gap-x-2 text-regular lg:text-[18px]"><img src={check} alt="check" /> <p>Fans stay excited when they know what’s coming next</p></li>
                                <li className="flex gap-x-2 text-regular lg:text-[18px]"><img src={check} alt="check" /> <p>One high-value drop per week keeps them subscribed</p></li>
                                <li className="flex gap-x-2 text-regular lg:text-[18px]"><img src={check} alt="check" /> <p>Receive exclusive 1-on-1 messages from your top fans with FanMail</p></li>
                            </ul>
                            <img className="absolute lg:hidden bottom-0 w-[45px] rotate-[45deg] lg:rotate-0 right-[-10px]" src={arrowRight} alt="arrow" />
                        </div>
                    </motion.div>
                    
                </div>
            </Container>
        </section>
    )
}