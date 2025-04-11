import "regenerator-runtime/runtime";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { World, Item } from "react-dom-box2d";
import { Container } from "../shared/Container";

export const Socials = () => {
    const wrapperRef = useRef(null);
    const [worldWidth, setWorldWidth] = useState(0);
    const isInView = useInView(wrapperRef, { once: true, threshold: 0.5 });
  
    const updateWidth = () => {
      if (wrapperRef.current) {
        const width = wrapperRef.current.offsetWidth;
        setWorldWidth(width);
      }
    };
  
    useEffect(() => {
      updateWidth();
      window.addEventListener("resize", updateWidth);
      return () => {
        window.removeEventListener("resize", updateWidth);
      };
    }, []); 
  
   
  return (
    <section className="overflow-hidden relative" >
      <Container>
        <div ref={wrapperRef} className="border-b-[1px]"  style={{ borderColor: "rgba(255, 255, 255, 0.45)" }}>
        {isInView && worldWidth > 0 && (
            <World
          key={worldWidth}
          width={worldWidth} 
          height={730} 
          gravity={[0, 9.8]} 
          className="world"
          enclosureThickness={0}
        >
         
              <Item
                left={170}
                top={10}
                density={1}
                width={250}
                height={250}
                shape="circle"
                restitution={0.5}
              >
                <div className="w-full max-w-[250px] h-full max-h-[250px]">
                  <img src="/assets/be_the_first.png" alt="" />
                </div>
              </Item>
              <Item
                left={450}
                top={60}
                density={1}
                width={320}
                height={79}
                shape="box"
                restitution={1}
              >
                <a
                  href="https://www.instagram.com"
                  className="font-light !flex items-center justify-center w-full max-w-[320px] h-[79px] text-[#8120D5] text-[14px] lg:text-[36px] uppercase border border-[#8120D5] rounded-[40px] bg-white"
                >
                  Instagram
                </a>
              </Item>
              <Item
                left={700}
                top={80}
                density={1}
                width={285}
                height={79}
                shape="box"
                restitution={0.5}
              >
                <a
                  href="https://www.tiktok.com"
                  className="!flex items-center font-light justify-center w-full max-w-[285px] h-[79px] text-[#8120D5] text-[14px] lg:text-[36px] uppercase border border-[#8120D5] rounded-[40px] bg-white"
                >
                  Tiktok
                </a>
              </Item>

              <Item
                left={150}
                top={290}
                density={1}
                width={290}
                height={79}
                shape="box"
                restitution={0.5}
              >
                <a
                  href="https://www.linkedin.com"
                  className=" font-light !flex items-center justify-center w-full max-w-[290px] h-[79px] text-[#8120D5] text-[14px] lg:text-[36px] uppercase border border-[#8120D5] rounded-[40px] bg-white"
                >
                  Linkedin
                </a>
              </Item>
              <Item
                left={390}
                top={100}
                density={1}
                width={250}
                height={250}
                shape="circle"
                restitution={0.5}
              >
                <div className="w-full max-w-[250px] h-full max-h-[250px]">
                  <img src="/assets/follow_us.png" alt="" />
                </div>
              </Item>
                <Item
                  left={690}
                  top={190}
                  density={1}
                  width={315}
                  height={79}
                  shape="box"
                  restitution={0.5}
                >
                  <a
                    href="https://www.facebook.com"
                    className="font-light !flex items-center justify-center w-full max-w-[315px] h-[79px] text-[#8120D5] text-[14px] lg:text-[36px] uppercase border border-[#8120D5] rounded-[40px] bg-white"
                  >
                    Facebook
                  </a>
                </Item>
                <Item
                  left={850}
                  top={240}
                  density={1}
                  width={210}
                  height={114}
                  shape="box"
                  restitution={0.5}
                  friction={0.1}
                >
                  <div className="w-full max-w-[210px] h-full max-h-[250px]">
                    <img src="/assets/stay_connected.png" alt="" />
                  </div>
                </Item>
        </World>
        )}
        </div>
      </Container>
    </section>
  );
};
