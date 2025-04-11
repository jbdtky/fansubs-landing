export const Tag = ({text, image, className}) => {
    return (
        <div className={`w-max h-[34px] rounded-full outline-none p-[1px] relative bg-gradient-to-r from-[#AA65E1] to-[#F0C8A4] ${className}`}>
            <div className="flex px-[20px] flex-row items-center justify-center gap-x-2 h-full w-full rounded-full bg-black">
                <span className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#AA65E1] to-[#F0C8A4]">{text}</span>
                <span>{image}</span>
            </div>
        </div>
    )
}