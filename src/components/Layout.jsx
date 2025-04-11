import { useEffect, useState } from "react"
import { Navbar } from "./elements/Navbar"
import { Footer } from "./elements/Footer"
import { GradientBackground } from "react-gradient-animation";

export const Layout = ({title, children}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        document.title = title;
        
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [title]);

    return (
        <>
            <Navbar />

            <main className="flex flex-col gap-y-25 md:gap-y-32 relative z-10">
            {!isMobile && (
                    <GradientBackground
                        count={2}
                        size={{ min: 1400, max: 2000, pulse: 0.1}}
                        speed={{ x: { min: 0.3, max: 1 }, y: { min: 0.3, max: 1 } }}
                        colors={{
                            particles: [
                                "#9e6ee6", 
                                "#fa75f8", 
                            ],
                        }}
                        blending="overlay"
                        opacity={{ center: 0.3, edge: 0 }} 
                        shapes={["c"]} 
                        style={{
                            opacity: 0.8,
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                        }}
                    />
            )}
                {children}
            </main>

            <Footer />
        </>
    );
}
