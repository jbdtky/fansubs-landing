export const BtnLink = ({href, text, className}) => {
    return (
        <a href={href} className={`block w-full md:w-max px-10 py-4 text-center rounded-[16px] outline-none bg-gradient-to-r from-[#8120D5] to-[#C397E8] ${className}`}>
            <span className="relative z-10 text-white">{text}</span>
        </a>
    )
}