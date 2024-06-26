import { CiShoppingCart } from "react-icons/ci";

interface ICard{
    price: string,
    title: string,
    description: string,
    id: string,
    posterUrl: string
}

export default function BookCard({price, title, description, id, posterUrl}: ICard){
    return (
        <div id={id} className="card_book p-3 rounded-xl bg-white min-w-[300px] min-h-[430px] max-w-[300px] max-h-[430px] w-[300px] h-[430px]" style={{boxShadow: "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px"}}>
            <div className="w-full h-[60%] rounded-lg" style={{backgroundSize: "cover", backgroundRepeat: "no-repeat",backgroundImage: `url(${posterUrl})`}}/>
            <div className="flex flex-col w-full h-[40%] items-start pt-3">
                <div className="flex flex-col w-full items-start">
                <p className="font-regular text-gray-600 text-sm">Kz {price}</p>
                <h2 className="text-black font-semibold">{title}</h2></div>
                <div className="w-full h-[40px] overflow-hidden">
                    <p className="font-regular text-gray-600 text-[0.79em] text-justify">{description}</p>
                </div>
                <button className="mt-4 w-full h-[40px] min-h-[40px] max-h-[40px] rounded-md flex items-center justify-center gap-[10px] text-sm bg-[#000000d6] text-white">Adicionar ao carrinho <CiShoppingCart className="w-[24px] h-[24px]"/></button>
            </div>
        </div>
    )
}