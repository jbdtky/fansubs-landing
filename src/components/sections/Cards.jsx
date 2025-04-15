import { Container } from "../shared/Container"
import { Title } from "../shared/Title"
import { Tag } from "../shared/Tag"
import underline from "../../assets/underline.svg"
import { motion } from "framer-motion"
import backgroundImage from '../../assets/card_bg.png'; 

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
}

export const Cards = () => {
  return (
    <section className="overflow-x-clip scroll-mt-[70px] mb-[100px] lg:mb-[200px]" id="how-it-works">
      <Container>
        <div className="flex flex-col items-center mx-auto">
          <Tag image="🌟" text="How it works" className="mb-[10px]" />
          <Title element="h2" className="text-[28px] lg:text-[48px] mb-10 lg:mb-[70px] !font-normal lg:font-semibold impact-text text-white">
            Easy Steps to Create &{" "}
            <span className="relative">
              Grow
              <img className="absolute left-0 top-full" src={underline} alt="underline" />
            </span>
          </Title>

          <div className="flex gap-x-[15px] gap-y-[15px] mx-auto max-w-[1040px] lg:gap-x-6 lg:gap-y-6 flex-wrap">
            {[
              {
                title: "Create Once, Earn Weekly",
                content: [
                  "Schedule exclusive content drops for your fans every Friday—no daily posting grind, no endless perks to manage.",
                  "Just consistent engagement that builds anticipation.",
                ],
              },
              {
                title: "Low Fees, More Earnings",
                content: [
                  "FanSubs takes only 5%, one of the lowest rates in the industry.",
                  "Stay consistent, and you keep more of what you make.",
                ],
              },
              {
                title: "Seamless Workflow",
                content: [
                  "AI-powered content automation + Notion integration makes planning effortless.",
                  "No more juggling multiple tools—FanSubs fits into how you already create.",
                  "Manage every aspect of your weekly earnings and content schedule.",
                ],
                image: "/assets/cards.png",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
                variants={fadeUp}
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className={`${
                  i < 2 ? "w-full sm:w-[calc(50%-12px)]" : "w-full"
                }  flex-wrap lg:flex-nowrap rounded-[25px] lg:rounded-[35px] px-[20px] py-[30px]  lg:px-[55px] lg:py-[35px] flex ${
                  i === 2 ? "justify-between items-center gap-[20px] lg:gap-[75px] rounded-[16px]" : "flex-col"
                }`}
              >
                <div className="flex flex-col">
                  <Title element="h3" className=" mb-[15px] lg:mb-5 text text-xl lg:text-2xl font-bold text-left text-white">
                    {card.title}
                  </Title>
                  <ul className="list-disc marker:text-[10px] leading-[1.28] text-white pl-[25px] text-sm lg:text-base">
                    {card.content.map((text, index) => (
                      <li key={index}>
                        {text.includes("FanSubs") ? (
                          <>
                            FanSubs takes only <strong>5%</strong>, one of the lowest rates in the industry.
                          </>
                        ) : text.includes("Friday") ? (
                          <>
                            Schedule exclusive content drops for your fans every <strong>Friday</strong>—no daily posting grind, no endless perks to manage.
                          </>
                        ) : (
                          text
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
                {card.image && (
                  <div>
                    <img src={card.image} alt="card" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
