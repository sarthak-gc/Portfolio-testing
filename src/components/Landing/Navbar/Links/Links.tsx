interface DeskTopLinksPropI {
    onClick: () => void;
    page: string
}

export const DesktopLinks = ({onClick, page}: DeskTopLinksPropI)=>{
    return (
        <div onClick={onClick} className="text-white hover:text-gray-400 transition duration-300">
            {page}
        </div>
    )
}