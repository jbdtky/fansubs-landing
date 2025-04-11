import { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import { NavItem } from "../shared/NavItem";

const navItems = [
    { href: "#how-it-works", text: "How it Works" },
    { href: "#why-fansubs", text: "Why FanSubs?" },
    { href: "#get-started", text: "Get Started" },
];

const socials = [
    { href: "https://linkedin.com", text: "linkedin" },
    { href: "https://www.instagram.com", text: "instagram" },
    { href: "https://www.facebook.com", text: "Facebook" },
    { href: "https://tiktok.com", text: "TikTok" },
];

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024); 
        };

        handleResize(); 
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 py-5 lg:py-6 backdrop-blur-[100px] ${
                isMenuOpen && isMobile ? "bg-black" : ""
            }`}
        >
            <Container>
                <nav className="w-full flex justify-between gap-6 relative">
                    <div className="min-w-max inline-flex relative">
                        <a href="/" className="relative flex items-center gap-3">
                            <img src={logo} alt="FanSubs Logo" className="w-[125px] h-[40px] lg:w-50 lg:h-16" />
                        </a>
                    </div>

                    {/* Burger Button */}
                    <button
                        className="lg:hidden flex items-center space-x-2"
                        onClick={toggleMenu}
                    >
                        <img src={isMenuOpen ? close : burger} alt={isMenuOpen ? "close" : "burger"} />
                    </button>

                    {/* Navigation */}
                    <div
                        className={`${
                            isMenuOpen
                                ? isMobile
                                    ? "fixed top-[80px] flex flex-col left-0 right-0 pb-[20px] bg-black h-[calc(100dvh-80px)] z-50"
                                    : "flex lg:flex-row lg:justify-between lg:items-center"
                                : "hidden"
                        } lg:flex flex-col lg:flex-row lg:justify-between lg:items-center absolute top-full left-0 right-0 lg:static`}
                    >
                        <ul className="flex flex-col lg:flex-row gap-y-8 m-auto text-center gap-x-8 lg:justify-center lg:items-center">
                            {navItems.map((item, key) => (
                                <NavItem key={key} href={item.href} text={item.text} />
                            ))}
                        </ul>
                        <ul className="lg:hidden flex font-light items-center px-5 sm:px-8 md:px-14 flex justify-between">
                            {socials.map((item, key) => (
                                <li key={key}>
                                    <a
                                        href={item.href}
                                        className="text-[14px] font-light text-white capitalize"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </Container>
        </header>
    );
};
