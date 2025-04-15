import "regenerator-runtime/runtime";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { World, Item } from "react-dom-box2d";
import { Container } from "../shared/Container";

export const Socials = () => {
    const wrapperRef = useRef(null);
    const [worldWidth, setWorldWidth] = useState(0);
    const [worldHeight, setWorldHeight] = useState(730);

    const isInView = useInView(wrapperRef, { once: true, threshold: 0.5 });

    const socialsData = [
      {
        id: 1,
        src: "/assets/be_the_first.png",
        shape: "circle",
        desktop: { width: 250, height: 250, left: 170, top: 10 },
        tablet: { width: 180, height: 180, left: 100, top: 30 },
        mobile: { width: 95, height: 95, left: 20, top: 20 },
      },
      {
        id: 2,
        link: "https://www.instagram.com",
        text: "instagram",
        shape: "box",
        desktop: { width: 320, height: 79, left: 450, top: 60 },
        tablet: { width: 260, height: 70, left: 240, top: 60 },
        mobile: { width: 120, height: 30, left: 140, top: 50 },
      },
      {
        id: 3,
        link: "https://www.tiktok.com",
        text: "tiktok",
        shape: "box",
        desktop: { width: 285, height: 79, left: 700, top: 80 },
        tablet: { width: 240, height: 70, left: 400, top: 70 },
        mobile: { width: 110, height: 30, left: 80, top: 60 },
      },
      {
        id: 4,
        link: "https://www.linkedin.com",
        text: "linkedin",
        shape: "box",
        desktop: { width: 290, height: 79, left: 150, top: 290 },
        tablet: { width: 240, height: 70, left: 100, top: 220 },
        mobile: { width: 110, height: 30, left: 30, top: 180 },
      },
      {
        id: 5,
        src: "/assets/follow_us.png",
        shape: "circle",
        desktop: { width: 250, height: 250, left: 390, top: 100 },
        tablet: { width: 180, height: 180, left: 200, top: 100 },
        mobile: { width: 95, height: 95, left: 60, top: 90 },
      },
      {
        id: 6,
        link: "https://www.facebook.com",
        text:"facebook",
        shape: "box",
        desktop: { width: 315, height: 79, left: 690, top: 190 },
        tablet: { width: 260, height: 70, left: 400, top: 160 },
        mobile: { width: 120, height: 30, left: 80, top: 140 },
      },
      {
        id: 7,
        src: "/assets/stay_connected.png",
        shape: "box",
        desktop: { width: 210, height: 114, left: 760, top: 240 },
        tablet: { width: 180, height: 100, left: 500, top: 200 },
        mobile: { width: 80, height: 45, left: 100, top: 180 },
      },
    ];
  
  
  useEffect(() => {
    const updateDimensions = () => {
      const padding = 20; 
      const calculatedWidth = wrapperRef.current.offsetWidth;

      setWorldWidth(calculatedWidth);
      if (window.innerWidth >= 1024) {
        setWorldHeight(730); 
      } else if (window.innerWidth >= 768) {
        setWorldHeight(500); 
      } else {
        setWorldHeight(350);
      }
    };

    updateDimensions(); 
    window.addEventListener("resize", updateDimensions);
    
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

    const getCurrentBreakpoint = () => {
      const width = window.innerWidth;
      if (width <= 575) return "mobile";
      if (width <= 1024) return "tablet";
      return "desktop";
    };
  
   
  return (
    <section className="overflow-hidden relative" >
      <Container>
        <div ref={wrapperRef} className="border-b-[1px]"  style={{ borderColor: "rgba(255, 255, 255, 0.45)" }}>
        {isInView && worldWidth > 0 && (
        <World
          key={worldWidth}
          width={worldWidth} 
          height={worldHeight} 
          gravity={[0, 9.8]} 
          className="world"
          enclosureThickness={0}
        >
         
         {socialsData.map((item) => {
            const screen = getCurrentBreakpoint();
            const { width, height, left, top } = item[screen];

            return (
              <Item
                key={item.id}
                shape={item.shape}
                width={width}
                height={height}
                left={left}
                top={top}
                density={1}
                restitution={0.5}
                friction={0.1}
              >
                {item.src ? (
                  <div
                    className="w-full h-full"
                    style={{ maxWidth: width, maxHeight: height }}
                  >
                    <img src={item.src} alt="" className="w-full h-full object-contain" />
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="font-light !flex items-center justify-center w-full h-full text-[#8120D5] text-[14px] lg:text-[36px] uppercase border border-[#8120D5] rounded-[40px] bg-white"
                    style={{ maxWidth: width, maxHeight: height }}
                  >
                   {item.text}
                  </a>
                )}
              </Item>
            );
          })}
        </World>
        )}
        </div>
      </Container>
    </section>
  );
};
