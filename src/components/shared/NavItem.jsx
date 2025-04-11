export const NavItem = ({href, text}) => {
    return (
        <li>
            <a href={href} className="text-2xl lg:text-[18px] font-regular text-white hover:text-[#8120D5]">{text}</a>
        </li>
    )
}