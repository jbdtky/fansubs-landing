import { useState, useEffect } from "react";
import { Container } from "../shared/Container";
import logo from "../../assets/logo.svg";
import burger from "../../assets/burger.svg";
import close from "../../assets/close.svg";
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";

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
    const closeMenu = () => setIsMenuOpen(false);
    
    
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
            style={{ 
                backdropFilter: "blur(100px)", 
                WebkitBackdropFilter: "blur(100px)"
            }}
            className={`fixed inset-x-0 top-0 z-50 py-5 lg:py-10 backdrop-blur-[100px] ${
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
                        } lg:flex flex-col lg:flex-row w-full lg:justify-between lg:items-center absolute top-full left-0 right-0 lg:static`}
                    >
                        <ul className="flex flex-col lg:flex-row gap-y-8 w-full m-auto text-center gap-x-8 lg:justify-center lg:items-center">
                            {navItems.map((item, key) => (
                                <NavItem key={key} href={item.href} text={item.text} onClick={closeMenu} />
                            ))}
                            <li className="hidden lg:block ml-auto">
                                <a href="https://www.instagram.com/" className="group  text-white  hover:text-[#8120D5]  transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                        <path d="M2.5 12.5C2.5 8.022 2.5 5.782 3.891 4.391C5.282 3 7.521 3 12 3C16.478 3 18.718 3 20.109 4.391C21.5 5.782 21.5 8.021 21.5 12.5C21.5 16.978 21.5 19.218 20.109 20.609C18.718 22 16.479 22 12 22C7.522 22 5.282 22 3.891 20.609C2.5 19.218 2.5 16.979 2.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M17.508 7H17.498M16.5 12.5C16.5 13.6935 16.0259 14.8381 15.182 15.682C14.3381 16.5259 13.1935 17 12 17C10.8065 17 9.66193 16.5259 8.81802 15.682C7.97411 14.8381 7.5 13.6935 7.5 12.5C7.5 11.3065 7.97411 10.1619 8.81802 9.31802C9.66193 8.47411 10.8065 8 12 8C13.1935 8 14.3381 8.47411 15.182 9.31802C16.0259 10.1619 16.5 11.3065 16.5 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </a>
                            </li>
                            <li className="hidden lg:block">
                                <a href="https://x.com/" className="group  text-white  hover:text-[#8120D5]  transition-colors duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                        <path d="M12.1983 9.093L18.8435 1.3125H17.2685L11.5001 8.06794L6.89058 1.3125H1.57495L8.54433 11.529L1.57495 19.6875H3.14995L9.24258 12.5528L14.1106 19.6875H19.4263L12.1983 9.093ZM10.0419 11.6182L9.33576 10.6011L3.71695 2.50687H6.13589L10.6693 9.03919L11.3754 10.0564L17.2698 18.5483H14.8509L10.0419 11.6182Z" fill="currentColor"/>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <BtnLink className="navbar-button" href="/auth" text="Log In" />
                            </li>
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
