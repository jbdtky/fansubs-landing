import { Container } from "../shared/Container"
import { Title } from "../shared/Title"
import underline from "../../assets/underline_double.svg"
import arrowRight from "../../assets/arrow_right.svg"
import { motion } from "framer-motion"

const variants = {
    topToBottom: {
      hidden: { opacity: 0, y: '-100%' },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    },
    bottomToTop: {
      hidden: { opacity: 0, y: '50%' },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }
  }

export const List = () => {
    return <section className="overflow-x-clip relative mb-[120px] lg:mb-[250px]">
        <Container>
           <div className="flex flex-col items-center">
                <motion.div variants={variants.topToBottom} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}>
                    <Title element="h2" className="text-[20px] lg:text-[36px] mb-[10px] lg:mb-0 font-bold text-left text-transparent bg-clip-text bg-gradient-to-r from-[#AA65E1] to-[#F0C8A4]">Keep More of What You Earn</Title>
                        <div className="relative max-w-[490px] text-center mx-auto mb-[25px] lg:mb-[50px] text-[14px] lg:text-regular">
                            <p className="text-left lg:text-center text-white max-w-[90%] sm:max-w-full font-extralight">FanSubs has one of the <strong className="font-semibold">lowest fees </strong>in the industry – <strong className="font-semibold">just 5%!</strong><br/> If you make <strong className="font-semibold">$10,000/month</strong>, here’s how much you’d keep using FanSubs vs. other platforms</p>
                            <img className="sm:absolute top-[30px] ml-auto sm:ml-0 w-[45px] right-[-80px] sm:w-[70px] rotate-[80deg] sm:rotate-[30deg]" src={arrowRight} alt="arrow" />
                        </div>
                </motion.div>
                <motion.div className="w-full" variants={variants.bottomToTop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}>
                    <div className="w-full relative rounded-[35px] py-[15px] lg:py-0 text-sm lg:text-base text-white boder-dashed mb-5 lg:mb-10">
                        <div className="flex flex-row items-center justify-between text-[20px] px-5 py-[15px] lg:py-10 lg:px-[50px] border-b-[1px]" style={{ borderColor: 'rgba(129, 32, 213, 0.2)' }}>
                            <div className="w-[125px] sm:w-1/3">
                                <p className="text-[14px] lg:text-[20px] font-regular lg:font-semibold">FanSubs</p>
                            </div>
                            <div className="w-1/3 flex justify-center">
                                <p className="text-[14px] lg:text-[20px] font-semibold">5%</p>
                            </div>
                            <div className="w-1/3 flex justify-center sm:justify-end text-right">
                                <p className="text-[14px] lg:text-[20px] relative font-semibold">
                                    <span>$9,500</span>
                                    <img src={underline} alt="underline" className="absolute -bottom-[10px] left-0" />
                                    </p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between text-[20px]  px-5 py-[15px] lg:py-10 lg:px-[50px] border-b-[1px]" style={{ borderColor: 'rgba(129, 32, 213, 0.2)' }}>
                            <div className="text-[14px] lg:text-[20px] w-[125px] sm:w-1/3">
                                <p>Patreon,<br /> Buy Me a Coffee</p>
                            </div>
                            <div className="text-[14px] lg:text-[20px] w-1/3 flex justify-center">
                                <p>10-20%</p>
                            </div>
                            <div className="text-[14px] lg:text-[20px] w-1/3 flex justify-end">
                                <p className="font-semibold lg:font-normal">$8,000 <br className="block lg:hidden" /> to $9,000</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between text-[20px]  px-5 py-[15px]  lg:py-10 lg:px-[50px]">
                            <div className="text-[14px] lg:text-[20px] w-[125px] sm:w-1/3">
                                <p>Passes, FanFix</p>
                            </div>
                            <div className="text-[14px] lg:text-[20px] w-1/3 flex justify-center">
                                <p>20%</p>
                            </div>
                            <div className="w-1/3 flex justify-center sm:justify-end">
                                <p className="text-[14px] lg:text-[20px] font-semibold  lg:font-normal">$8,000</p>
                            </div>
                        </div>
                    </div>
                    <p className="text-white text-left font-extralight lg:text-center text-[16px] lg:text-[18px]">🚀 That’s <strong className="font-semibold">$9,000-$12,000 more</strong> in your pocket every year with FanSubs </p>
                </motion.div>
           </div>
        </Container>
    </section>
}