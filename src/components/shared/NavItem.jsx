export const NavItem = ({href, text, onClick}) => {
    return (
        <li className="lg:first:ml-auto">
            <a href={href} onClick={onClick} className="text-2xl lg:text-[14px] font-regular text-white hover:text-[#8120D5] transition-colors duration-300">{text}</a>
        </li>
    )
}