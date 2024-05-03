import Image from "next/image"
import svg from '@/assets/images/404.svg'
import logo from '@/assets/images/logo_full_size.png'
import '@/styles/defaultPages.css'
import { FaArrowRightLong } from "react-icons/fa6"
import Link from "next/link"

export default function NotFound() {
    return (
        <main className="notFound_container">
            <Image className="logo" src={logo} alt={'not-found'}/>
            <Image src={svg} alt={'not-found'}/>
            <h1>OPS! Página não encontrada</h1>
            <Link href={'/auth/login'}>Ir para o login <FaArrowRightLong/></Link>
        </main>
    )
}