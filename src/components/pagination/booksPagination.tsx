import { Dispatch, SetStateAction } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { PiAngleLight } from "react-icons/pi";

interface IProps {
    limit: number,
    total: number,
    offset: number,
    setOffset: Dispatch<SetStateAction<number>>
}

const MAX_ITEMS = 9;
const MAX_LEFT = (MAX_ITEMS - 1)/2

export default function BooksPagination({limit, offset, total, setOffset}: IProps) {
    const current = (offset / limit) + 1;
    const pages = Math.ceil(total / limit);
    const first = Math.max(current - MAX_LEFT, 1)

    async function onPageChange(page: number) {
        setOffset((page - 1) * limit)
    }
    

    return (
        <ul className="flex gap-4">
            <button className={"px-4 py-2 cursor-pointer rounded-md bg-white flex items-center justify-center text-sm disabled:opacity-50"} disabled={current === 1} style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}} onClick={()=>{onPageChange(current - 1)}}>Anterior</button>
            {Array.from({length: Math.min(MAX_ITEMS, pages)}).map((_, index) => index + 1)
            .map((page)=>(
                <li className={page === current ? "px-4 py-2 cursor-pointer rounded-md bg-black text-white" : "px-4 py-2 cursor-pointer rounded-md bg-white"} style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}} key={page} onClick={()=>{onPageChange(page)
                    console.log(current)
                }}>{page}</li>
            ))}
            <button className={"px-4 py-2 cursor-pointer rounded-md bg-white flex items-center justify-center text-sm disabled:opacity-50"} style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}} onClick={()=>{onPageChange(current + 1)}} disabled={current === pages}>Próximo</button>
        </ul>
    )
}